import {
  CdkDragDrop,
  transferArrayItem,
  moveItemInArray,
} from '@angular/cdk/drag-drop';
import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Store } from '@ngrx/store';
import {
  BoardsInterface,
  EpicsInterface,
  ReleaseInterface,
  SprintsInterface,
  StoriesInterface,
  UserInterface,
} from 'src/app/utils/types';
import { SprintsService } from '../../sprints.service';
import { FormViewComponent } from 'src/app/pages/form-view/form-view.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sprint-view',
  templateUrl: './sprint-view.component.html',
  styleUrls: ['./sprint-view.component.scss'],
})
export class SprintViewComponent {
  columns = ['TODO', 'IN_PROGRESS', 'QA', 'DONE'];
  currentSprint: EpicsInterface[] = [];
  connectedDropLists: string[] = [];

  constructor(
    private store: Store,
    private dialog: MatDialog,
    private route: ActivatedRoute,
    private router: Router,
    private sprintService: SprintsService
  ) { }

  ngOnInit(): void {
    this.route.paramMap.subscribe((params) => {
      const id = params.get('id');
      if (id) {
        this.sprintService.getCurrentSprint(+id).subscribe((res) => {
          this.currentSprint = res.data;
          console.log("current sprint", res.data);


          // Build all droplist IDs after data is loaded
          this.connectedDropLists = this.currentSprint.flatMap((epic) =>
            this.columns.map((column) => this.getDropListId(epic.id, column))
          );
        });
      }
    });
  }

  getDropListId(epicId: number | undefined, column: string): string {
    return `dropList_${epicId}_${column}`;
  }

  getStoriesForColumn(epic: any, column: string): any[] {
    return epic.stories.filter((story: any) => story.status === column);
  }

  onStoryDrop(
    event: CdkDragDrop<any[]>,
    targetEpic: any,
    targetColumn: string
  ) {
    console.log('status', targetColumn);

    const story = event.previousContainer.data[event.previousIndex];
    const oldStatus = story.status;
    story.status = targetColumn;

    if (event.previousContainer !== event.container) {
      transferArrayItem(
        event.previousContainer.data,
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    } else {
      moveItemInArray(
        event.container.data,
        event.previousIndex,
        event.currentIndex
      );
    }

    this.sprintService.updateStoryStatus(story.id, targetColumn).subscribe({
      next: () => {
        console.log('Story status updated successfully');
      },
      error: () => {
        console.error('Failed to update story status. Reverting.');
        // Rollback UI
        story.status = oldStatus;

        // Move item back
        if (event.previousContainer !== event.container) {
          transferArrayItem(
            event.container.data,
            event.previousContainer.data,
            event.currentIndex,
            event.previousIndex
          );
        } else {
          moveItemInArray(
            event.container.data,
            event.currentIndex,
            event.previousIndex
          );
        }
      },
    });
  }

  openDialog(element: StoriesInterface) {
    // let id: number | undefined;
    console.log("selected story", element);


    this.dialog.open;
    this.dialog.open(FormViewComponent, {
      data: {
        tableType: 'Story',
        id: element.id,
        element,
      },
      width: '700px',
    });
  }

  redirectToStoryView(storyId: number) {
    this.router.navigateByUrl(`/stories/dashboard/${storyId}`);
  }
}

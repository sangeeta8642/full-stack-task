import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StoriesService } from '../../stories.service';
import {
  ColumnConfig,
  StoriesInterface,
  SubtaskInterface,
} from 'src/app/utils/types';
import { Store } from '@ngrx/store';
import { storyActions, SubtaskActions } from 'src/app';
import { getAllStories } from '../../store/stories.selector';
import { CreateSubtaskComponent } from 'src/app/dashboards/subtask/components/create-subtask/create-subtask/create-subtask.component';
import { MatDialog } from '@angular/material/dialog';
import { selectAllSubtasks } from 'src/app/dashboards/subtask/store/subtask.selector';
import { SubtaskService } from 'src/app/dashboards/subtask/subtask.service';

@Component({
  selector: 'app-story-view',
  templateUrl: './story-view.component.html',
  styleUrls: ['./story-view.component.scss'],
})
export class StoryViewComponent {
  storyId: number | null = null;
  story: StoriesInterface | null = null;
  stories: StoriesInterface[] = [];
  subtasks: SubtaskInterface[] = [];

  constructor(
    private route: ActivatedRoute,
    private storyService: StoriesService,
    private store: Store,
    private subtaskService: SubtaskService,
    private dialog: MatDialog
  ) {
    this.route.paramMap.subscribe((params) => {
      this.storyId = Number(params.get('id'));

      if (this.storyId) {
        this.storyService.getStory(this.storyId).subscribe((res) => {
          console.log('Get story', res);

          this.story = res;
        });
      }
    });

    // this.store.dispatch(SubtaskActions.loadSubtasks());
    // }
  }

  ngAfterViewInit() {
    // this.store.select(selectAllSubtasks).subscribe((res) => {
    //   console.log('subtasks', res);

    //   this.subtasks = res;
    // });
    if (this.storyId) {
      this.subtaskService.getSubtasksByStory(this.storyId).subscribe((res) => {
        console.log('subtasks', res);
        this.subtasks = res.data;
      });
    }
  }

  subtaskColumns: ColumnConfig[] = [
    {
      columnDef: 'taskId',
      header: 'ID',
      cell: (element: SubtaskInterface) => `${element.taskId}`,
    },
    {
      columnDef: 'taskName',
      header: 'Task Name',
      cell: (element: SubtaskInterface) => `${element.taskName}`,
    },
    {
      columnDef: 'description',
      header: 'Description',
      cell: (element: SubtaskInterface) => `${element.description}`,
    }
  ];

  openTaskDialog() {
    const dialogRef = this.dialog.open(CreateSubtaskComponent, {
      width: '600px',
      data: {
        storyId: this.storyId,
      },
      // height:'600px'
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        console.log('Task Submitted: ', result);
      }
    });
  }
}

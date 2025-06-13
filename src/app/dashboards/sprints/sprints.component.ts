import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { sprintActions } from 'src/app';
import { getAllSprints } from 'src/app/dashboards/sprints/store/sprints.selectors';
import { ColumnConfig, SprintsInterface } from 'src/app/utils/types';

@Component({
  selector: 'app-sprints',
  templateUrl: './sprints.component.html',
  styleUrls: ['./sprints.component.scss']
})
export class SprintsComponent {
  sprints: SprintsInterface[] = [
    // { SprintId: 1, SprintNo: "S1", SprintName: "Sprint Alpha", SprintPoint: 20, StartDate: "2025-05-01", EndDate: "2025-05-15" },
    // { SprintId: 2, SprintNo: "S2", SprintName: "Sprint Beta", SprintPoint: 25, StartDate: "2025-05-16", EndDate: "2025-05-30" },
    // { SprintId: 3, SprintNo: "S3", SprintName: "Sprint Gamma", SprintPoint: 30, StartDate: "2025-06-01", EndDate: "2025-06-15" },
    // { SprintId: 4, SprintNo: "S4", SprintName: "Sprint Delta", SprintPoint: 22, StartDate: "2025-06-16", EndDate: "2025-06-30" },
    // { SprintId: 5, SprintNo: "S5", SprintName: "Sprint Epsilon", SprintPoint: 18, StartDate: "2025-07-01", EndDate: "2025-07-15" }
  ];

  sprintColumns: ColumnConfig[] = [
    {
      columnDef: 'SprintId',
      header: 'ID',
      cell: (element: SprintsInterface) => `${element.sprintId}`
    },
    {
      columnDef: 'SprintNo',
      header: 'Sprint No',
      cell: (element: SprintsInterface) => `${element.sprintNo}`
    },
    {
      columnDef: 'SprintName',
      header: 'Name',
      cell: (element: SprintsInterface) => `${element.sprintName}`
    },
    {
      columnDef: 'SprintPoint',
      header: 'Points',
      cell: (element: SprintsInterface) => `${element.sprintPoint}`
    },
    {
      columnDef: 'StartDate',
      header: 'Start Date',
      cell: (element: SprintsInterface) => new Date(element.startDate).toLocaleDateString()
    },
    {
      columnDef: 'Board',
      header: 'Board',
      cell: (element: SprintsInterface) => `${element?.board?.boardName}`
    },
    {
      columnDef: 'EndDate',
      header: 'End Date',
      cell: (element: SprintsInterface) => new Date(element.endDate).toLocaleDateString()
    }
  ];

  constructor(private store: Store) {
    this.store.dispatch(sprintActions.loadSprints())
    this.store.select(getAllSprints).subscribe(res => (
      this.sprints = res.sprints
    ))
  }

}
// import { Component } from '@angular/core';
// import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
// import { Store } from '@ngrx/store';
// import { getAllSprints } from './store/sprints.selectors';
// import { ActivatedRoute, Router } from '@angular/router';
// import { SprintsService } from './sprints.service';
// import { EpicsInterface } from 'src/app/utils/types';

// @Component({
//   selector: 'app-sprints',
//   templateUrl: './sprints.component.html',
//   styleUrls: ['./sprints.component.scss']
// })
// export class SprintsComponent {
//   columns = ['TODO', 'IN_PROGRESS', 'DONE'];

//   // epics = [
//   //   {
//   //     id: 1,
//   //     title: 'Epic 1',
//   //     stories: [
//   //       { id: 1, title: 'Story A', status: 'TODO' },
//   //       { id: 2, title: 'Story C', status: 'TODO' },
//   //       { id: 3, title: 'Story D', status: 'TODO' },
//   //       { id: 4, title: 'Story E', status: 'DONE' },
//   //       { id: 5, title: 'Story F', status: 'DONE' },
//   //       { id: 6, title: 'Story G', status: 'DONE' },
//   //       { id: 7, title: 'Story B', status: 'IN_PROGRESS' }
//   //     ]
//   //   },
//   //   {
//   //     id: 2,
//   //     title: 'Epic 2',
//   //     stories: [
//   //       { id: 1, title: 'Story A', status: 'TODO' },
//   //       { id: 2, title: 'Story C', status: 'DONE' },
//   //       { id: 3, title: 'Story D', status: 'TODO' },
//   //       { id: 4, title: 'Story F', status: 'TODO' },
//   //       { id: 5, title: 'Story E', status: 'DONE' },
//   //       { id: 6, title: 'Story B', status: 'IN_PROGRESS' }
//   //     ]
//   //   },
//   //   {
//   //     id: 3,
//   //     title: 'Epic 3',
//   //     stories: [
//   //       { id: 1, title: 'Story A', status: 'TODO' },
//   //       { id: 2, title: 'Story B', status: 'IN_PROGRESS' },
//   //       { id: 3, title: 'Story C', status: 'TODO' },
//   //       { id: 4, title: 'Story D', status: 'TODO' },
//   //       { id: 5, title: 'Story E', status: 'DONE' },
//   //     ]
//   //   }
//   // ];

//   currentSprint: EpicsInterface[] = []
//   /**
//    *
//    */
//   constructor(private store: Store, private router: ActivatedRoute, private sprintService: SprintsService) {
//     this.store.select(getAllSprints).subscribe(res => {
//       console.log("Sprints", res);
//     })

//     this.router.paramMap.subscribe(params => {
//       const id = params.get('id')

//       console.log("SPRING ID:", id);
//       if (id) {
//         this.sprintService.getCurrentSprint(+id).subscribe(res => {
//           this.currentSprint = res.data
//           console.log("Epics:", res);

//           this.connectedDropLists = this.currentSprint.flatMap(epic =>
//             this.columns.map(column => this.getDropListId(epic.id, column))
//           );

//         })
//       }

//     })

//   }

//   connectedDropLists: string[] = [];

//   ngOnInit(): void {
//     // this.connectedDropLists = this.currentSprint.flatMap(epic =>
//     //   this.columns.map(column => this.getDropListId(epic.epicId, column))
//     // );
//   }

//   getDropListId(epicId: number | undefined, column: string): string {
//     return `dropList_${epicId}_${column}`;
//   }

//   getStoriesForColumn(epic: any, column: string): any[] {
//     return epic.stories.filter((story: { status: string; }) => story.status === column);
//   }

//   hasStoriesInColumn(epic: any, column: string): boolean {
//     return this.getStoriesForColumn(epic, column).length > 0;
//   }

//   onStoryDrop(event: CdkDragDrop<any[]>, targetEpic: any, targetColumn: string) {
//     const story = event.previousContainer.data[event.previousIndex];
//     story.status = targetColumn;

//     if (event.previousContainer !== event.container) {
//       transferArrayItem(
//         event.previousContainer.data,
//         event.container.data,
//         event.previousIndex,
//         event.currentIndex
//       );
//     } else {
//       moveItemInArray(
//         event.container.data,
//         event.previousIndex,
//         event.currentIndex
//       );
//     }
//   }

// }


// import { Component, OnInit } from '@angular/core';
// import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
// import { Store } from '@ngrx/store';
// import { ActivatedRoute } from '@angular/router';
// import { SprintsService } from './sprints.service';
// import { EpicsInterface } from 'src/app/utils/types';

// @Component({
//   selector: 'app-sprints',
//   templateUrl: './sprints.component.html',
//   styleUrls: ['./sprints.component.scss']
// })
// export class SprintsComponent implements OnInit {
//   columns = ['TODO', 'IN_PROGRESS', 'DONE'];
//   currentSprint: EpicsInterface[] = [];
//   connectedDropLists: string[] = [];

//   constructor(
//     private store: Store,
//     private route: ActivatedRoute,
//     private sprintService: SprintsService
//   ) { }

//   ngOnInit(): void {
//     this.route.paramMap.subscribe(params => {
//       const id = params.get('id');
//       if (id) {
//         this.sprintService.getCurrentSprint(+id).subscribe(res => {
//           this.currentSprint = res.data;

//           // Build all droplist IDs after data is loaded
//           this.connectedDropLists = this.currentSprint.flatMap(epic =>
//             this.columns.map(column => this.getDropListId(epic.id, column))
//           );
//         });
//       }
//     });
//   }

//   getDropListId(epicId: number | undefined, column: string): string {
//     return `dropList_${epicId}_${column}`;
//   }

//   getStoriesForColumn(epic: any, column: string): any[] {
//     return epic.stories.filter((story: any) => story.status === column);
//   }

//   onStoryDrop(event: CdkDragDrop<any[]>, targetEpic: any, targetColumn: string) {
//     const story = event.previousContainer.data[event.previousIndex];
//     const oldStatus = story.status
//     story.status = targetColumn;

//     if (event.previousContainer !== event.container) {
//       transferArrayItem(
//         event.previousContainer.data,
//         event.container.data,
//         event.previousIndex,
//         event.currentIndex
//       );
//     } else {
//       moveItemInArray(
//         event.container.data,
//         event.previousIndex,
//         event.currentIndex
//       );
//     }

//     this.sprintService.updateStoryStatus(story.id, targetColumn).subscribe({
//       next: () => {
//         console.log("Story status updated successfully");
//       },
//       error: () => {
//         console.error("Failed to update story status. Reverting.");
//         // Rollback UI
//         story.status = oldStatus;

//         // Move item back
//         if (event.previousContainer !== event.container) {
//           transferArrayItem(
//             event.container.data,
//             event.previousContainer.data,
//             event.currentIndex,
//             event.previousIndex
//           );
//         } else {
//           moveItemInArray(
//             event.container.data,
//             event.currentIndex,
//             event.previousIndex
//           );
//         }
//       }
//     }
//     )
//   }
// } 
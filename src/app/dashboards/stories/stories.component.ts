import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { storyActions } from 'src/app';
import { getAllStories } from 'src/app/dashboards/stories/store/stories.selector';
import { ColumnConfig, StoriesInterface } from 'src/app/utils/types';

@Component({
  selector: 'app-stories',
  templateUrl: './stories.component.html',
  styleUrls: ['./stories.component.scss'],
})
export class StoriesComponent {
  ngOnInit() {
    this.store.dispatch(storyActions.loadStories());
  }

  storyColumns: ColumnConfig[] = [
    {
      columnDef: 'StoryId',
      header: 'ID',
      cell: (element: any) => `${element.storyId}`,
    },
    {
      columnDef: 'StoryName',
      header: 'Name',
      cell: (element: any) => `${element.storyName}`,
    },
    {
      columnDef: 'Description',
      header: 'Description',
      cell: (element: any) => `${element.description}`,
    },
    {
      columnDef: 'StatusId',
      header: 'Status ID',
      cell: (element: any) => `${element.statusId}`,
    },
    {
      columnDef: 'BoardId',
      header: 'Board ID',
      cell: (element: any) => `${element.boardId}`,
    },
    {
      columnDef: 'UserId',
      header: 'User ID',
      cell: (element: any) => `${element.userId}`,
    },
    {
      columnDef: 'SprintId',
      header: 'Sprint ID',
      cell: (element: any) => `${element.sprintId}`,
    },
    {
      columnDef: 'EpicId',
      header: 'Epic ID',
      cell: (element: any) => `${element.epicId}`,
    },
  ];

  stories: StoriesInterface[] = [
    // { StoryId: 1, StoryName: "Login Page", Description: "Design login UI", StatusId: 1, BoardId: 1, UserId: 1, SprintId: 1, EpicId: 1 },
    // { StoryId: 2, StoryName: "Stripe Integration", Description: "Implement Stripe payments", StatusId: 2, BoardId: 1, UserId: 2, SprintId: 2, EpicId: 2 },
    // { StoryId: 3, StoryName: "Email Alerts", Description: "Trigger email notifications", StatusId: 3, BoardId: 3, UserId: 3, SprintId: 3, EpicId: 3 },
    // { StoryId: 4, StoryName: "UI Dashboard", Description: "Build dashboard layout", StatusId: 1, BoardId: 4, UserId: 4, SprintId: 4, EpicId: 4 },
    // { StoryId: 5, StoryName: "Sales Reports", Description: "Generate reports", StatusId: 2, BoardId: 5, UserId: 5, SprintId: 5, EpicId: 5 }
  ];

  constructor(private store: Store) {
    this.store
      .select(getAllStories)
      .subscribe((res) => (this.stories = res.stories));
  }
}

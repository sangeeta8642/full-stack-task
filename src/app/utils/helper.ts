import { Validators } from '@angular/forms';
import {
  boardActions,
  epicActions,
  releaseActions,
  sprintActions,
  storyActions,
  userActions,
} from '..';

type Role = 'manager' | 'lead' | 'developer';
export type Context =
  | 'Board'
  | 'Sprint'
  | 'Story'
  | 'Epic'
  | 'User'
  | 'Release'
  | 'Subtask';

export const actionColumnVisibility: Record<Role, Context[]> = {
  manager: ['Board', 'Sprint', 'Story', 'Epic', 'User', 'Release'],
  lead: ['Board', 'Sprint', 'Story', 'Epic', 'Release'],
  developer: [],
};

export const entityFormControls: Record<string, () => any> = {
  Board: () => ({
    boardName: ['', Validators.required],
  }),
  Sprint: () => ({
    sprintName: ['', Validators.required],
    sprintNo: ['', Validators.required],
    sprintPoint: ['', Validators.required],
    boardId: ['', Validators.required],
    startDate: [new Date(), Validators.required],
    endDate: [new Date().getDate() + 7, Validators.required],
  }),
  Story: () => ({
    storyName: ['', Validators.required],
    description: [''],
    flag: [false],
    statusId: [''],
    boardId: [''],
    userId: [''],
    sprintId: [''],
    epicId: [''],
  }),
  Epic: () => ({
    epicName: ['', Validators.required],
    description: [''],
  }),
  Subtask: () => ({
    taskName: ['', Validators.required],
    description: [''],
    storyId: [''],
  }),
  User: () => ({
    UserName: ['', Validators.required],
    Email: ['', [Validators.required, Validators.email]],
    Password: ['', Validators.required],
    RoleId: [''],
  }),
  Release: () => ({
    ReleaseName: ['', Validators.required],
    SprintId: ['', Validators.required],
  }),
};

export const entityDispatchers: Record<string, (data: any) => any> = {
  Board: (data) => boardActions.addBoard(data),
  Release: (data) => releaseActions.addReleaseSuccess({ release: data }),
  Epic: (data) => epicActions.addEpic(data),
  Sprint: (data) => sprintActions.addSprint(data),
  Story: (data) => storyActions.addStory(data),
  User: (data) => userActions.addStagedUser(data),
};

export const entityDispatchersForUpdate: Record<
  string,
  (id: number, data: any) => any
> = {
  Board: (id, data) => boardActions.updateBoard({ id, board: data }),
  // Release: (data) => releaseAction.addReleaseSuccess({ release: data }),
  // Epic: (data) => epicAction.addEpicSuccess({ epic: data }),
  Sprint: (id, data) => sprintActions.updateSprint({ id, sprint: data }),
  // Story: (data) => storyActions.addStorySuccess({ story: data }),
  // User: (data) => usersActions.addStagedUser(data),
};

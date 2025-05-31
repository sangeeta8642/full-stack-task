import { Validators } from "@angular/forms";

import * as releaseAction from 'src/app/dashboards/releases/store/releases.action';
import * as epicAction from 'src/app/dashboards/epics/store/epics.actions';
import * as sprintsAction from 'src/app/dashboards/sprints/store/sprints.actions';
import * as boardActions from 'src/app/dashboards/boards/store/boards.actions';
import * as storyActions from 'src/app/dashboards/stories/store/stories.actions';
import * as usersActions from 'src/app/dashboards/users/store/users.actions';

type Role = 'manager' | 'lead' | 'developer';
export type Context =
    'Board' | 'Sprint' | 'Story' | 'Epic' | 'User' | 'Release'

export const actionColumnVisibility: Record<Role, Context[]> = {
    manager: ['Board', 'Sprint', 'Story', 'Epic', 'User', 'Release'],
    lead: ['Board', 'Sprint', 'Story', 'Epic', 'Release'],
    developer: []
};

export const entityFormControls: Record<string, () => any> = {
    Board: () => ({
        BoardName: ['', Validators.required],
    }),
    Sprint: () => ({
        SprintName: ['', Validators.required],
        SprintNo: ['', Validators.required],
        SprintPoint: [''],
        StartDate: [''],
        EndDate: [''],
    }),
    Story: () => ({
        StoryName: ['', Validators.required],
        Description: [''],
        Flag: [false],
        StatusId: [''],
        BoardId: [''],
        UserId: [''],
        SprintId: [''],
        EpicId: [''],
    }),
    Epic: () => ({
        EpicName: ['', Validators.required],
        Description: [''],
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
    Board: (data) => boardActions.addBoardSuccess({ board: data }),
    Release: (data) => releaseAction.addReleaseSuccess({ release: data }),
    Epic: (data) => epicAction.addEpicSuccess({ epic: data }),
    Sprint: (data) => sprintsAction.addSprintSuccess({ sprint: data }),
    Story: (data) => storyActions.addStorySuccess({ story: data }),
    User: (data) => usersActions.addUserSuccess({ user: data }),
};


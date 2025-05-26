import { ActionReducerMap } from '@ngrx/store';
import { BoardState } from './ngrx/boards/boards.state';
import { boardReducer } from './ngrx/boards/boards.reducer';
import { ReleaseState } from './ngrx/releases/releases.state';
import { releaseReducer } from './ngrx/releases/releases.reducer';
import { EpicState } from './ngrx/epics/epics.state';
import { epicReducer } from './ngrx/epics/epics.reducers';
import { SprintState } from './ngrx/sprints/sprints.state';
import { sprintReducer } from './ngrx/sprints/sprints.reducers';
import { StoryState } from './ngrx/stories/stories.state';
import { storyReducer } from './ngrx/stories/stories.reducers';
import { UserState } from './ngrx/user/users.state';
import { userReducer } from './ngrx/user/users.reducers';
import { RoleState } from './ngrx/roles/role.state';
import { roleReducer } from './ngrx/roles/role.reducer';

export interface AppState {
  boards: BoardState;
  releases: ReleaseState;
  epics: EpicState;
  sprints: SprintState;
  stories: StoryState;
  users: UserState;
  roles: RoleState;
}

export const appReducer: ActionReducerMap<AppState> = {
  boards: boardReducer,
  releases: releaseReducer,
  epics: epicReducer,
  sprints: sprintReducer,
  stories: storyReducer,
  users: userReducer,
  roles: roleReducer,
};

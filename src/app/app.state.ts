import { ActionReducerMap } from '@ngrx/store';
import { EpicState } from './dashboards/epics/store/epics.state';
import { epicReducer } from './dashboards/epics/store/epics.reducers';
import { SprintState } from './dashboards/sprints/store/sprints.state';
import { sprintReducer } from './dashboards/sprints/store/sprints.reducers';
import { StoryState } from './dashboards/stories/store/stories.state';
import { storyReducer } from './dashboards/stories/store/stories.reducers';
import { UserState } from './dashboards/users/store/users.state';
import { userReducer } from './dashboards/users/store/users.reducers';
import { RoleState } from './ngrx/roles/role.state';
import { roleReducer } from './ngrx/roles/role.reducer';
import { BoardState } from './dashboards/boards/store/boards.state';
import { boardReducer } from './dashboards/boards/store/boards.reducer';
import { ReleaseState } from './dashboards/releases/store/releases.state';
import { releaseReducer } from './dashboards/releases/store/releases.reducer';
import { SubtaskState } from './dashboards/subtask/store/subtask.state';
import { subtaskReducer } from './dashboards/subtask/store/subtask.reducer';

export interface AppState {
  boards: BoardState;
  releases: ReleaseState;
  epics: EpicState;
  sprints: SprintState;
  stories: StoryState;
  users: UserState;
  roles: RoleState;
  subtask: SubtaskState;
}

export const appReducer: ActionReducerMap<AppState> = {
  boards: boardReducer,
  releases: releaseReducer,
  epics: epicReducer,
  sprints: sprintReducer,
  stories: storyReducer,
  users: userReducer,
  roles: roleReducer,
  subtask:subtaskReducer
};

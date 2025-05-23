import { ActionReducerMap } from "@ngrx/store";
import { BoardState } from "./ngrx/boards/boards.state";
import { boardReducer } from "./ngrx/boards/boards.reducer";
import { ReleaseState } from "./ngrx/releases/releases.state";
import { releaseReducer } from "./ngrx/releases/releases.reducer";
import { EpicState } from "./ngrx/epics/epics.state";
import { epicReducer } from "./ngrx/epics/epics.reducers";
import { SprintState } from "./ngrx/sprints/sprints.state";
import { sprintReducer } from "./ngrx/sprints/sprints.reducers";
import { StoryState } from "./ngrx/stories/stories.state";
import { storyReducer } from "./ngrx/stories/stories.reducers";

export interface AppState {
    boards: BoardState,
    releases: ReleaseState,
    epics: EpicState,
    sprints: SprintState,
    stories: StoryState
}

export const appReducer: ActionReducerMap<AppState> = {
    boards: boardReducer,
    releases: releaseReducer,
    epics: epicReducer,
    sprints: sprintReducer,
    stories: storyReducer
}
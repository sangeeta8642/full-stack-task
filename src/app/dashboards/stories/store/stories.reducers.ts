import { createReducer, on } from "@ngrx/store";
// import { initialepicstate } from "./boards.state";
import * as storyAction from './stories.actions'
import { initialStoryState } from "./stories.state";
// import { initialEpicState } from "./epics.state";

export const storyReducer = createReducer(
    initialStoryState,
    on(storyAction.loadStoriesSuccess, (state, actions) => ({
        ...state,
        stories: actions.stories
    })),
    on(storyAction.addStorySuccess, (state, action) => ({
        ...state,
        stories: [...state.stories, action.story]
    })),
    on(storyAction.updateStorySuccess, (state, action) => ({
        ...state,
        stories: state.stories.map(b => b.storyId === action.id ? action.story : b)
    })),
    on(storyAction.deleteStorySuccess, (state, action) => ({
        ...state,
        stories: state.stories.filter(b => b.storyId != action.id)
    }))
)
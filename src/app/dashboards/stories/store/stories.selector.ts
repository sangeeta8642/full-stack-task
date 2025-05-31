import { createFeatureSelector, createSelector } from "@ngrx/store";
import { StoryState } from "./stories.state";

export const selectStoryState = createFeatureSelector<StoryState>('stories')

export const getAllStories = createSelector(
    selectStoryState,
    (state: StoryState) => state
)
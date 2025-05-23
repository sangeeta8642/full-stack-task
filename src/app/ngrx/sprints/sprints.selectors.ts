import { createFeatureSelector, createSelector } from "@ngrx/store";
import { SprintState } from "./sprints.state";

export const selectSprintState = createFeatureSelector<SprintState>('sprints')

export const getAllSprints = createSelector(
    selectSprintState,
    (state: SprintState) => state
)
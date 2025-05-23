import { createFeatureSelector, createSelector } from "@ngrx/store";
import { ReleaseState } from "./releases.state";
// import {  } from "./boards.state";

export const selectReleaseState = createFeatureSelector<ReleaseState>('releases')

export const getAllReleases = createSelector(
    selectReleaseState,
    (state: ReleaseState) => state
)
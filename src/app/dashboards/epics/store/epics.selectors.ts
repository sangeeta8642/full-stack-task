import { createFeatureSelector, createSelector } from "@ngrx/store";
import { EpicState } from "./epics.state";
// import { BoardState } from "./boards.state";

export const selectEpicState = createFeatureSelector<EpicState>('epics')

export const getAllEpics = createSelector(
    selectEpicState,
    (state: EpicState) => state
)
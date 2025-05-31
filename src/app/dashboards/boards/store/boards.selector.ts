import { createFeatureSelector, createSelector } from "@ngrx/store";
import { BoardState } from "./boards.state";

export const selectBoardState = createFeatureSelector<BoardState>('boards')

export const getAllBoards = createSelector(
    selectBoardState,
    (state: BoardState) => state
)
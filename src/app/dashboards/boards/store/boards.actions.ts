import { createAction, props } from "@ngrx/store";
import { BoardsInterface } from "src/app/utils/types";

export const loadBoards = createAction('[boards] Load Boards');
export const loadBoardsSuccess = createAction('[boards] Load Boards Success', props<{ boards: BoardsInterface[] }>());
export const loadBoardsFailed = createAction('[boards] Load Boards Failed', props<{ error: any }>());

export const addBoard = createAction('[boards] Add Board', props<BoardsInterface>());
export const addBoardSuccess = createAction('[boards] Add Board Success', props<{ board: BoardsInterface }>());
export const addBoardFailed = createAction('[boards] Add Board Failed', props<{ error: any }>());

export const updateBoard = createAction('[boards] Update Board', props<{ id: number, board: BoardsInterface }>());
export const updateBoardSuccess = createAction('[boards] Update Board Success', props<{ id: number, board: BoardsInterface }>());
export const updateBoardFailed = createAction('[boards] Update Board Failed', props<{ error: any }>());

export const deleteBoard = createAction('[boards] Delete Board', props<{ id: number }>());
export const deleteBoardSuccess = createAction('[boards] Delete Board Success', props<{ id: number }>());
export const deleteBoardFailed = createAction('[boards] Delete Board Failed', props<{ error: any }>());


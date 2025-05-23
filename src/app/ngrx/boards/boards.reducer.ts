import { createReducer, on } from "@ngrx/store";
import { initialBoardState } from "./boards.state";
import * as boardActions from './boards.actions'

export const boardReducer = createReducer(
    initialBoardState,
    on(boardActions.loadBoardsSuccess, (state, actions) => ({
        ...state,
        boards: actions.boards
    })),
    on(boardActions.addBoardSuccess, (state, action) => ({
        ...state,
        boards: [...state.boards, action.board]
    })),
    on(boardActions.updateBoardSuccess, (state, action) => ({
        ...state,
        boards: state.boards.map(b => b.BoardId === action.id ? action.board : b)
    })),
    on(boardActions.deleteBoardSuccess, (state, action) => ({
        ...state,
        boards: state.boards.filter(b => b.BoardId != action.id)
    }))
)
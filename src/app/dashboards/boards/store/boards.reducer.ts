import { createReducer, on } from "@ngrx/store";
import { initialBoardState } from "./boards.state";
import * as boardActions from './boards.actions'

export const boardReducer = createReducer(
    initialBoardState,
    on(boardActions.loadBoards, (state, actions) => ({
        ...state,
        boards: [],
        loading: true,
        error: null
    })),
    on(boardActions.loadBoardsSuccess, (state, actions) => ({
        ...state,
        boards: actions.boards,
        loading: false,
        error: null
    })),
    on(boardActions.loadBoardsFailed, (state, actions) => ({
        ...state,
        // boards: actions.boards
        error: actions.error,
        loading: false
    })),

    on(boardActions.addBoardSuccess, (state, action) => ({
        ...state,
        boards: [...state.boards, action.board]
    })),

    on(boardActions.updateBoard, (state, action) => ({
        ...state,
        // boards: state.boards.map(b => b.BoardId === action.id ? action.board : b)
    })),

    on(boardActions.updateBoardSuccess, (state, action) => ({
        ...state,
        boards: state.boards.map(b => b.boardId === action.id ? action.board : b)
    })),
    on(boardActions.deleteBoard, (state, action) => ({
        ...state
    })),
    on(boardActions.deleteBoardSuccess, (state, action) => ({
        ...state,
        boards: state.boards.filter(b => b.boardId != action.id)
    })),
    on(boardActions.deleteBoardSuccess, (state, action) => ({
        ...state,
        boards: state.boards.filter(b => b.boardId != action.id)
    }))
)
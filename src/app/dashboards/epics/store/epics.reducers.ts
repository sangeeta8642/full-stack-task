import { createReducer, on } from "@ngrx/store";
// import { initialepicstate } from "./boards.state";
import * as epicsAction from './epics.actions'
import { initialEpicState } from "./epics.state";

export const epicReducer = createReducer(
    initialEpicState,
    on(epicsAction.loadEpicsSuccess, (state, actions) => ({
        ...state,
        epics: actions.epics
    })),
    on(epicsAction.addEpicSuccess, (state, action) => ({
        ...state,
        epics: [...state.epics, action.epic]
    })),
    on(epicsAction.updateEpicSuccess, (state, action) => ({
        ...state,
        epics: state.epics.map(b => b.EpicId === action.id ? action.epic : b)
    })),
    on(epicsAction.deleteEpicSuccess, (state, action) => ({
        ...state,
        epics: state.epics.filter(b => b.EpicId != action.id)
    }))
)
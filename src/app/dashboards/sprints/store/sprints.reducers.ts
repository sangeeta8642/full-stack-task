import { createReducer, on } from "@ngrx/store";
// import { initialepicstate } from "./boards.state";
import * as sprintActions from './sprints.actions'
import { initialSprintState } from "./sprints.state";
// import { initialEpicState } from "./epics.state";

export const sprintReducer = createReducer(
    initialSprintState,
    on(sprintActions.loadSprintsSuccess, (state, actions) => {
        console.log("Sprint load action", actions);

        return {
            ...state,
            sprints: actions.sprints
        }
    }),
    on(sprintActions.addSprintSuccess, (state, action) => ({
        ...state,
        sprints: [...state.sprints, action.sprint]
    })),
    on(sprintActions.updateSprintSuccess, (state, action) => ({
        ...state,
        sprints: state.sprints.map(b => b.sprintId === action.id ? action.sprint : b)
    })),
    on(sprintActions.deleteSprintSuccess, (state, action) => ({
        ...state,
        sprints: state.sprints.filter(b => b.sprintId != action.id)
    }))
)
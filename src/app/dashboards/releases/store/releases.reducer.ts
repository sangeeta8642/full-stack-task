import { createReducer, on } from "@ngrx/store";
import { initialReleaseState } from "./releases.state";
import * as releaseActions from './releases.action'

export const releaseReducer = createReducer(
    initialReleaseState,
    on(releaseActions.loadReleasesSuccess, (state, actions) => ({
        ...state,
        releases: actions.releases
    })),
    on(releaseActions.addReleaseSuccess, (state, action) => ({
        ...state,
        releases: [...state.releases, action.release]
    })),
    on(releaseActions.updateReleaseSuccess, (state, action) => ({
        ...state,
        releases: state.releases.map(b => b.releaseId === action.id ? action.release : b)
    })),
    on(releaseActions.deleteReleaseSuccess, (state, action) => ({
        ...state,
        releases: state.releases.filter(b => b.releaseId != action.id)
    }))
)
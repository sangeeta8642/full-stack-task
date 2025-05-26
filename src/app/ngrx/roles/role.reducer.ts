import { createReducer, on } from '@ngrx/store';
// import { initialBoardState } from "./roards.state";
import * as roleActions from './role.actions';
import { initialRoleState } from './role.state';

export const roleReducer = createReducer(
  initialRoleState,
  on(roleActions.loadRolesSuccess, (state, actions) => ({
    ...state,
    roles: actions.roles,
  })),
  on(roleActions.addRoleSuccess, (state, action) => ({
    ...state,
    roles: [...state.roles, action.role],
  })),
  on(roleActions.updateRoleSuccess, (state, action) => ({
    ...state,
    roles: state.roles.map((r) => (r.id === action.id ? action.role : r)),
  })),
  on(roleActions.deleteRoleSuccess, (state, action) => ({
    ...state,
    roles: state.roles.filter((r) => r.id != action.id),
  }))
);

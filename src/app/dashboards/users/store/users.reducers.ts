import { createReducer, on } from '@ngrx/store';
// import { initialepicstate } from "./boards.state";
import * as userActions from './users.actions';
import { initialUserState } from './users.state';
// import { initialStoryState } from './stories.state';
// import { initialEpicState } from "./epics.state";

export const userReducer = createReducer(
  initialUserState,
  on(userActions.loadUsersSuccess, (state, actions) => ({
    ...state,
    users: actions.users,
  })),

  on(userActions.loginUser, (state, actions) => ({
    ...state,
    loading: true,
    error: null
  })),

  on(userActions.loginUserSuccess, (state, actions) => {
    console.log("Action received:", actions);

    return {
      ...state,
      loading: false,
      error: null,
      user: actions.user,
    };
  }
  ),

  on(userActions.loginUserFailed, (state, actions) => ({
    ...state,
    user: null,
    loading: false,
    error: actions.error
  })),

  on(userActions.loginFirstTime, (state, actions) => ({
    ...state,
    loading: true,
    error: null
  })),

  on(userActions.loginFirstTimeSuccess, (state, actions) => ({
    ...state,
    user: actions.user,
  })),

  on(userActions.logOutUser, (state, actions) => ({
    ...state,
    user: null,
  })),

  on(userActions.addStagedUser, (state, action) => ({
    ...state,
    loading: true,
    error: null
  })),

  on(userActions.addUserSuccess, (state, action) => ({
    ...state,
    users: [...state.users, action.user],
  })),

  on(userActions.updateUserSuccess, (state, action) => ({
    ...state,
    users: state.users.map((u) => (u.UserId === action.id ? action.user : u)),
  })),

  on(userActions.deleteUserSuccess, (state, action) => ({
    ...state,
    users: state.users.filter((u) => u.UserId != action.id),
  }))
);

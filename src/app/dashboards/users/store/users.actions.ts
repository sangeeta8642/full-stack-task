import { createAction, props } from '@ngrx/store';
import { loginFirstTimeModel, LoginInterface, UserInterface } from 'src/app/utils/types';

export const loadUsers = createAction('[users] Load Users');
export const loadUsersSuccess = createAction(
  '[users] Load Users Success',
  props<{ users: UserInterface[] }>()
);
export const loadUsersFailed = createAction(
  '[users] Load Users Failed',
  props<{ error: any }>()
);

export const addUser = createAction('[users] Add User');
export const addStagedUser = createAction('[users] Add Staged User', props<UserInterface>());
export const addUserSuccess = createAction(
  '[users] Add User Success',
  props<{ user: UserInterface }>()
);
export const addUserFailed = createAction(
  '[users] Add User Failed',
  props<{ error: any }>()
);

export const loginUser = createAction(
  '[users] Login User',
  props<LoginInterface>()
);
export const loginUserSuccess = createAction(
  '[users] Login User Success',
  props<{ user: UserInterface }>()
);
export const loginUserFailed = createAction(
  '[users] Login User Failed',
  props<{ error: any }>()
);

export const logOutUser = createAction(
  '[users] Log Out User'
);

export const loginFirstTime = createAction(
  '[users] Login User First Time',
  props<loginFirstTimeModel>()
);
export const loginFirstTimeSuccess = createAction(
  '[users] Login User First Time Success',
  props<{ user: UserInterface }>()
);
export const loginFirstTimeFailed = createAction(
  '[users] Login User First Time Failed',
  props<{ error: any }>()
);

export const updateUser = createAction('[users] Update User',
  props<{ id: number; user: UserInterface }>());
export const updateUserSuccess = createAction(
  '[users] Update User Success',
  props<{ id: number; user: UserInterface }>()
);
export const updateUserFailed = createAction(
  '[users] Update User Failed',
  props<{ error: any }>()
);

export const deleteUser = createAction('[users] Delete User');
export const deleteUserSuccess = createAction(
  '[users] Delete User Success',
  props<{ id: number }>()
);
export const deleteUserFailed = createAction(
  '[users] Delete User Failed',
  props<{ error: any }>()
);

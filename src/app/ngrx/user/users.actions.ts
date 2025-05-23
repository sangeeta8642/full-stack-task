import { createAction, props } from "@ngrx/store";
import { UserInterface } from "src/app/utils/types";

export const loadUsers = createAction('[users] Load Users');
export const loadUsersSuccess = createAction('[users] Load Users Success', props<{ users: UserInterface[] }>());
export const loadUsersFailed = createAction('[users] Load Users Failed', props<{ error: any }>());

export const addUser = createAction('[users] Add User');
export const addUserSuccess = createAction('[users] Add User Success');
export const addUserFailed = createAction('[users] Add User Failed');

export const loginUser = createAction('[users] Login User');
export const loginUserSuccess = createAction('[users] Login User Success');
export const loginUserFailed = createAction('[users] Login User Failed');

export const updateUser = createAction('[users] Update User');
export const updateUserSuccess = createAction('[users] Update User Success');
export const updateUserFailed = createAction('[users] Update User Failed');

export const deleteUser = createAction('[users] Delete User');
export const deleteUserSuccess = createAction('[users] Delete User Success');
export const deleteUserFailed = createAction('[users] Delete User Failed');


import { createFeatureSelector, createSelector } from '@ngrx/store';
import { UserState } from './users.state';
// import { UserState } from './stories.state';

export const selectUserState = createFeatureSelector<UserState>('users');

export const getAllUsers = createSelector(
  selectUserState,
  (state: UserState) => state
);

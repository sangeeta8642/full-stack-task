import { createFeatureSelector, createSelector } from '@ngrx/store';
import { RoleState } from './role.state';

export const selectRoleState = createFeatureSelector<RoleState>('roles');

export const getAllRoles = createSelector(
  selectRoleState,
  (state: RoleState) => state
);

import { createAction, props } from '@ngrx/store';
import { RoleInterface } from 'src/app/utils/types';
// import { RolesInterface } from "src/app/utils/types";

export const loadRoles = createAction('[roles] Load Roles');
export const loadRolesSuccess = createAction(
  '[roles] Load Roles Success',
  props<{ roles: RoleInterface[] }>()
);
export const loadRolesFailed = createAction(
  '[roles] Load Roles Failed',
  props<{ error: any }>()
);

export const addRole = createAction('[roles] Add Role');
export const addRoleSuccess = createAction(
  '[roles] Add Role Success',
  props<{ role: RoleInterface }>()
);
export const addRoleFailed = createAction(
  '[roles] Add Role Failed',
  props<{ error: any }>()
);

export const updateRole = createAction('[roles] Update Role');
export const updateRoleSuccess = createAction(
  '[roles] Update Role Success',
  props<{ id: number; role: RoleInterface }>()
);
export const updateRoleFailed = createAction(
  '[roles] Update Role Failed',
  props<{ error: any }>()
);

export const deleteRole = createAction('[roles] Delete Role');
export const deleteRoleSuccess = createAction(
  '[roles] Delete Role Success',
  props<{ id: number }>()
);
export const deleteRoleFailed = createAction(
  '[roles] Delete Role Failed',
  props<{ error: any }>()
);

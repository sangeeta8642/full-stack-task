import { createAction, props } from '@ngrx/store';
import { SubtaskInterface } from 'src/app/utils/types';

// Load Subtasks
export const loadSubtasks = createAction('[subtasks] Load Subtasks');
export const loadSubtasksSuccess = createAction(
  '[subtasks] Load Subtasks Success',
  props<{ subtasks: SubtaskInterface[] }>()
);
export const loadSubtasksFailed = createAction(
  '[subtasks] Load Subtasks Failed',
  props<{ error: any }>()
);

// Add Subtask
export const addSubtask = createAction(
  '[subtasks] Add Subtask',
  props<SubtaskInterface>()
);
export const addSubtaskSuccess = createAction(
  '[subtasks] Add Subtask Success',
  props<{ subtask: SubtaskInterface }>()
);
export const addSubtaskFailed = createAction(
  '[subtasks] Add Subtask Failed',
  props<{ error: any }>()
);

// Update Subtask
export const updateSubtask = createAction(
  '[subtasks] Update Subtask',
  props<{ id: number; subtask: SubtaskInterface }>()
);
export const updateSubtaskSuccess = createAction(
  '[subtasks] Update Subtask Success',
  props<{ id: number; subtask: SubtaskInterface }>()
);
export const updateSubtaskFailed = createAction(
  '[subtasks] Update Subtask Failed',
  props<{ error: any }>()
);

// Delete Subtask
export const deleteSubtask = createAction(
  '[subtasks] Delete Subtask',
  props<{ id: number }>()
);
export const deleteSubtaskSuccess = createAction(
  '[subtasks] Delete Subtask Success',
  props<{ id: number }>()
);
export const deleteSubtaskFailed = createAction(
  '[subtasks] Delete Subtask Failed',
  props<{ error: any }>()
);

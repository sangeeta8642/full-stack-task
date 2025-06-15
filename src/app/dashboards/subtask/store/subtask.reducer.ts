import { createReducer, on } from '@ngrx/store';
import { SubtaskActions } from 'src/app';
import { initialSubtaskState } from './subtask.state';

export const subtaskReducer = createReducer(
  initialSubtaskState,

  // Load
  on(SubtaskActions.loadSubtasks, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(SubtaskActions.loadSubtasksSuccess, (state, { subtasks }) => ({
    ...state,
    loading: false,
    subtasks
  })),
  on(SubtaskActions.loadSubtasksFailed, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  // Add
  on(SubtaskActions.addSubtask, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(SubtaskActions.addSubtaskSuccess, (state, { subtask }) => ({
    ...state,
    loading: false,
    subtasks: [...state.subtasks, subtask]
  })),
  on(SubtaskActions.addSubtaskFailed, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  // Update
  on(SubtaskActions.updateSubtask, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(SubtaskActions.updateSubtaskSuccess, (state, { id, subtask }) => ({
    ...state,
    loading: false,
    subtasks: state.subtasks.map(st =>
      st.taskId === id ? subtask : st
    )
  })),
  on(SubtaskActions.updateSubtaskFailed, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),

  // Delete
  on(SubtaskActions.deleteSubtask, (state) => ({
    ...state,
    loading: true,
    error: null
  })),
  on(SubtaskActions.deleteSubtaskSuccess, (state, { id }) => ({
    ...state,
    loading: false,
    subtasks: state.subtasks.filter(st => st.taskId !== id)
  })),
  on(SubtaskActions.deleteSubtaskFailed, (state, { error }) => ({
    ...state,
    loading: false,
    error
  })),
);

import { createFeatureSelector, createSelector } from '@ngrx/store';
import { SubtaskState } from './subtask.state';

// Feature selector
export const selectSubtaskState =
  createFeatureSelector<SubtaskState>('subtasks');

// Selectors
export const selectAllSubtasks = createSelector(
  selectSubtaskState,
  (state) => state?.subtasks
);

export const selectSubtasksLoading = createSelector(
  selectSubtaskState,
  (state) => state?.loading
);

export const selectSubtasksError = createSelector(
  selectSubtaskState,
  (state) => state?.error
);

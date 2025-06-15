import { createAction, props } from '@ngrx/store';
import { EpicsInterface } from 'src/app/utils/types';

export const loadEpics = createAction('[epics] Load Epics');
export const loadEpicsSuccess = createAction(
  '[epics] Load Epics Success',
  props<{ epics: EpicsInterface[] }>()
);
export const loadEpicsFailed = createAction(
  '[epics] Load Epics Failed',
  props<{ error: any }>()
);

export const addEpic = createAction(
  '[epics] Add Epic',
  props<EpicsInterface>()
);
export const addEpicSuccess = createAction(
  '[epics] Add Epic Success',
  props<{ epic: EpicsInterface }>()
);
export const addEpicFailed = createAction(
  '[epics] Add Epic Failed',
  props<{ error: any }>()
);

export const updateEpic = createAction(
  '[epics] Update Epic',
  props<{ id: number; epic: EpicsInterface }>()
);
export const updateEpicSuccess = createAction(
  '[epics] Update Epic Success',
  props<{ id: number; epic: EpicsInterface }>()
);
export const updateEpicFailed = createAction(
  '[epics] Update Epic Failed',
  props<{ error: any }>()
);

export const deleteEpic = createAction(
  '[epics] Delete Epic',
  props<{ id: number }>()
);
export const deleteEpicSuccess = createAction(
  '[epics] Delete Epic Success',
  props<{ id: number }>()
);
export const deleteEpicFailed = createAction(
  '[epics] Delete Epic Failed',
  props<{ error: any }>()
);

import { createAction, props } from "@ngrx/store";
import { SprintsInterface } from "src/app/utils/types";

export const loadSprints = createAction('[sprints] Load Sprints');
export const loadSprintsSuccess = createAction('[sprints] Load Sprints Success', props<{ sprints: SprintsInterface[] }>());
export const loadSprintsFailed = createAction('[sprints] Load Sprints Failed', props<{ error: any }>());

export const addSprint = createAction('[sprints] Add Sprint', props<SprintsInterface>());
export const addSprintSuccess = createAction('[sprints] Add Sprint Success', props<{ sprint: SprintsInterface }>());
export const addSprintFailed = createAction('[sprints] Add Sprint Failed', props<{ error: any }>());

export const updateSprint = createAction('[sprints] Update Sprint', props<{ id: number, sprint: SprintsInterface }>());
export const updateSprintSuccess = createAction('[sprints] Update Sprint Success', props<{ id: number, sprint: SprintsInterface }>());
export const updateSprintFailed = createAction('[sprints] Update Sprint Failed', props<{ error: any }>());

export const deleteSprint = createAction('[sprints] Delete Sprint', props<{ id: number }>());
export const deleteSprintSuccess = createAction('[sprints] Delete Sprint Success', props<{ id: number }>());
export const deleteSprintFailed = createAction('[sprints] Delete Sprint Failed', props<{ error: any }>());


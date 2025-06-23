import { createAction, props } from "@ngrx/store";
import { ReleaseInterface } from "src/app/utils/types";

export const loadReleases = createAction('[releases] Load Releases');
export const loadReleasesSuccess = createAction('[releases] Load Releases Success', props<{ releases: ReleaseInterface[] }>());
export const loadReleasesFailed = createAction('[releases] Load Releases Failed', props<{ error: any }>());

export const addRelease = createAction('[releases] Add Release', props<ReleaseInterface>());
export const addReleaseSuccess = createAction('[releases] Add Release Success', props<{ release: ReleaseInterface }>());
export const addReleaseFailed = createAction('[releases] Add Release Failed', props<{ error: any }>());

export const updateRelease = createAction('[releases] Update Release', props<{ id: number, release: ReleaseInterface }>());
export const updateReleaseSuccess = createAction('[releases] Update Release Success', props<{ id: number, release: ReleaseInterface }>());
export const updateReleaseFailed = createAction('[releases] Update Release Failed', props<{ error: any }>());

export const deleteRelease = createAction('[releases] Delete Release', props<{ id: number }>());
export const deleteReleaseSuccess = createAction('[releases] Delete Release Success', props<{ id: number }>());
export const deleteReleaseFailed = createAction('[releases] Delete Release Failed', props<{ error: any }>());


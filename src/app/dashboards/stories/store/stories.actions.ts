import { createAction, props } from '@ngrx/store';
import { StoriesInterface } from 'src/app/utils/types';

export const loadStories = createAction('[stories] Load Stories');
export const loadStoriesSuccess = createAction(
  '[stories] Load Stories Success',
  props<{ stories: StoriesInterface[] }>()
);
export const loadStoriesFailed = createAction(
  '[stories] Load Stories Failed',
  props<{ error: any }>()
);

export const addStory = createAction(
  '[stories] Add Story',
  props<StoriesInterface>()
);
export const addStorySuccess = createAction(
  '[stories] Add Story Success',
  props<{ story: StoriesInterface }>()
);
export const addStoryFailed = createAction(
  '[stories] Add Story Failed',
  props<{ error: any }>()
);

export const updateStory = createAction(
  '[stories] Update Story',
  props<{ id: number; story: StoriesInterface }>()
);
export const updateStorySuccess = createAction(
  '[stories] Update Story Success',
  props<{ id: number; story: StoriesInterface }>()
);
export const updateStoryFailed = createAction(
  '[stories] Update Story Failed',
  props<{ error: any }>()
);

export const deleteStory = createAction(
  '[stories] Delete Story',
  props<{ id: number }>()
);
export const deleteStorySuccess = createAction(
  '[stories] Delete Story Success',
  props<{ id: number }>()
);
export const deleteStoryFailed = createAction(
  '[stories] Delete Story Failed',
  props<{ error: any }>()
);

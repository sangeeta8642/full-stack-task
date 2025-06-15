import { SubtaskInterface } from 'src/app/utils/types';

export interface SubtaskState {
  subtasks: SubtaskInterface[];
  error: string | null;
  loading: boolean;
}

export const initialSubtaskState: SubtaskState = {
  subtasks: [
    // You can seed with initial data if you want.
    // {
    //   SubtaskId: 1,
    //   SubtaskName: 'Design Login Form',
    //   Description: 'Create login form UI',
    //   StoryId: 1
    // },
  ],
  error: null,
  loading: false,
};

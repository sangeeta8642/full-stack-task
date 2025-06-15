import { StoriesInterface } from 'src/app/utils/types';

export interface StoryState {
  stories: StoriesInterface[];
  error: string | null;
  loading: boolean;
}

export const initialStoryState: StoryState = {
  stories: [
    // {
    //   StoryId: 1,
    //   StoryName: 'Login Page',
    //   Description: 'Design login UI',
    //   StatusId: 1,
    //   BoardId: 1,
    //   UserId: 1,
    //   SprintId: 1,
    //   EpicId: 1,
    // },
    // {
    //   StoryId: 2,
    //   StoryName: 'Stripe Integration',
    //   Description: 'Implement Stripe payments',
    //   StatusId: 2,
    //   BoardId: 1,
    //   UserId: 2,
    //   SprintId: 2,
    //   EpicId: 2,
    // },
    // {
    //   StoryId: 3,
    //   StoryName: 'Email Alerts',
    //   Description: 'Trigger email notifications',
    //   StatusId: 3,
    //   BoardId: 3,
    //   UserId: 3,
    //   SprintId: 3,
    //   EpicId: 3,
    // },
    // {
    //   StoryId: 4,
    //   StoryName: 'UI Dashboard',
    //   Description: 'Build dashboard layout',
    //   StatusId: 1,
    //   BoardId: 4,
    //   UserId: 4,
    //   SprintId: 4,
    //   EpicId: 4,
    // },
    // {
    //   StoryId: 5,
    //   StoryName: 'Sales Reports',
    //   Description: 'Generate reports',
    //   StatusId: 2,
    //   BoardId: 5,
    //   UserId: 5,
    //   SprintId: 5,
    //   EpicId: 5,
    // },
  ],
  error: null,
  loading: false,
};

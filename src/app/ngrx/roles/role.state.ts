import { RoleInterface } from 'src/app/utils/types';

export interface RoleState {
  roles: RoleInterface[];
  error: string | null;
  loading: boolean;
}

export const initialRoleState: RoleState = {
  roles: [
    // {
    //   id: 1,
    //   Title: 'Project Manager', // Top-level: oversees everything
    // },
    // {
    //   id: 2,
    //   Title: 'Team Lead', // Mid-level: manages dev team
    // },
    // {
    //   id: 3,
    //   Title: 'Developer', // Base-level: implements the work
    // },
  ],
  error: null,
  loading: false,
};

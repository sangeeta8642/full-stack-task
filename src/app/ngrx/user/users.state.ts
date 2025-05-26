import { UserInterface } from 'src/app/utils/types';

export interface UserState {
  users: UserInterface[];
  user: UserInterface | null;
  error: string | null;
  loading: boolean;
}

export const initialUserState: UserState = {
  users: [
    {
      UserId: 1,
      UserName: 'Alice Johnson',
      Email: 'alice.johnson@example.com',
      Password: 'alice123', // Typically you'd hash passwords!
      RoleId: 2,
    },
    {
      UserId: 2,
      UserName: 'Bob Smith',
      Email: 'bob.smith@example.com',
      Password: 'bobSecure!',
      RoleId: 1,
    },
    {
      UserId: 3,
      UserName: 'Charlie Davis',
      Email: 'charlie.d@example.com',
      Password: 'charliePass',
      RoleId: 3,
    },
    {
      UserId: 4,
      UserName: 'Diana Lee',
      Email: 'diana.lee@example.com',
      Password: 'diana2024',
      RoleId: 2,
    },
    {
      UserId: 5,
      UserName: 'Ethan Brown',
      Email: 'ethan.b@example.com',
      Password: 'ethanPwd!',
      RoleId: 1,
    },
    {
      UserId: 6,
      UserName: 'Fiona White',
      Email: 'fiona.white@example.com',
      Password: 'fionaSecure',
      RoleId: 2,
    },
    {
      UserId: 7,
      UserName: 'George King',
      Email: 'george.k@example.com',
      Password: 'gking789',
      RoleId: 3,
    },
  ],
  user: null,
  error: null,
  loading: false,
};

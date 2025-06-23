import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/auth/auth.service';
import { getAllUsers } from 'src/app/dashboards/users/store/users.selectors';
import { ColumnConfig, UserInterface } from 'src/app/utils/types';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.scss'],
})
export class UsersComponent {
  users: UserInterface[] = [];

  constructor(private store: Store, private authService: AuthService) {
    // this.store.select(getAllUsers).subscribe((res) => (this.users = res.users));
    this.authService.getAllUsers().subscribe(res => this.users = res as UserInterface[])
  }
  // users: UserInterface[] = [
  //   {
  //     UserId: 1,
  //     UserName: 'Alice Johnson',
  //     Email: 'alice.johnson@example.com',
  //     Password: 'alice123', // Typically you'd hash passwords!
  //     RoleId: 2,
  //   },
  //   {
  //     UserId: 2,
  //     UserName: 'Bob Smith',
  //     Email: 'bob.smith@example.com',
  //     Password: 'bobSecure!',
  //     RoleId: 1,
  //   },
  //   {
  //     UserId: 3,
  //     UserName: 'Charlie Davis',
  //     Email: 'charlie.d@example.com',
  //     Password: 'charliePass',
  //     RoleId: 3,
  //   },
  //   {
  //     UserId: 4,
  //     UserName: 'Diana Lee',
  //     Email: 'diana.lee@example.com',
  //     Password: 'diana2024',
  //     RoleId: 2,
  //   },
  //   {
  //     UserId: 5,
  //     UserName: 'Ethan Brown',
  //     Email: 'ethan.b@example.com',
  //     Password: 'ethanPwd!',
  //     RoleId: 1,
  //   },
  //   {
  //     UserId: 6,
  //     UserName: 'Fiona White',
  //     Email: 'fiona.white@example.com',
  //     Password: 'fionaSecure',
  //     RoleId: 2,
  //   },
  //   {
  //     UserId: 7,
  //     UserName: 'George King',
  //     Email: 'george.k@example.com',
  //     Password: 'gking789',
  //     RoleId: 3,
  //   },
  // ];

  userColumnConfigs: ColumnConfig[] = [
    // {
    //   columnDef: 'UserId',
    //   header: 'User ID',
    //   cell: (element: UserInterface) => `${element.userId ?? '-'}`,
    // },
    {
      columnDef: 'UserName',
      header: 'Name',
      cell: (element: UserInterface) => `${element.userName}`,
    },
    {
      columnDef: 'Email',
      header: 'Email',
      cell: (element: UserInterface) => `${element.email}`,
    },
    // {
    //   columnDef: 'Password',
    //   header: 'Password',
    //   cell: (element: UserInterface) => `${element.Password}`,
    // },
    {
      columnDef: 'RoleId',
      header: 'Role ID',
      cell: (element: UserInterface) => `${element.role?.title}`,
    },
  ];
}

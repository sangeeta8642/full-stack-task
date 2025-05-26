import { Component } from '@angular/core';

export interface RoleInterface {
  id?: number;
  Title: string;
}

@Component({
  selector: 'app-role-dialog',
  templateUrl: './role-dialog.component.html',
  styleUrls: ['./role-dialog.component.scss'],
})
export class RoleDialogComponent {
  newRoleTitle: string = '';
  roles: RoleInterface[] = [
    { id: 1, Title: 'Project Manager' },
    { id: 2, Title: 'Team Lead' },
    { id: 3, Title: 'Developer' },
    // { id: 3, Title: 'Developer' },
    // { id: 3, Title: 'Developer' },
    // { id: 3, Title: 'Developer' },
    // { id: 3, Title: 'Developer' },
    // { id: 3, Title: 'Developer' },
    // { id: 3, Title: 'Developer' },
  ];
  nextId = 4;

  saveRole() {
    if (this.newRoleTitle.trim()) {
      this.roles.push({ id: this.nextId++, Title: this.newRoleTitle.trim() });
      this.newRoleTitle = '';
    }
  }

  editRole(role: RoleInterface) {
    const updatedTitle = prompt('Edit Role Title:', role.Title);
    if (updatedTitle !== null && updatedTitle.trim()) {
      role.Title = updatedTitle.trim();
    }
  }

  deleteRole(roleId?: number) {
    this.roles = this.roles.filter((role) => role.id !== roleId);
  }
}

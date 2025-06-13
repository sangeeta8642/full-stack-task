import { HttpClient } from '@angular/common/http';
import { Component, Input } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { boardActions } from 'src/app';
import { AuthService } from 'src/app/auth/auth.service';
import { getAllUsers } from 'src/app/dashboards/users/store/users.selectors';
import { FormViewComponent } from 'src/app/pages/form-view/form-view.component';
import { BACKEND_URL } from 'src/app/utils/constants';
import { actionColumnVisibility, Context } from 'src/app/utils/helper';
import {
  BoardsInterface,
  ColumnConfig,
  EpicsInterface,
  ReleaseInterface,
  SprintsInterface,
  StoriesInterface,
  UserInterface
} from 'src/app/utils/types';




@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent {
  @Input() columns: ColumnConfig[] = [];
  @Input() dataSource: any[] = [];
  @Input() context: Context = 'Board';
  userRole: 'manager' | 'lead' | 'developer' = "developer";

  // get displayedColumns(): string[] {
  //   return [...this.columns.map(c => c.columnDef), 'action'];
  // }

  /*
   *
   */
  constructor(private router: Router, private dialog: MatDialog, private store: Store, private http: HttpClient, private authService: AuthService,) {
    this.store.select(getAllUsers).subscribe(res => {
      this.userRole = res.user?.role?.title as 'manager' | 'lead' | 'developer' 
      // console.log("User logged in", this.user);

    })

  }



  get displayedColumns(): string[] {
    const baseColumns = this.columns.map(c => c.columnDef);
    const role = this.userRole;
    const canShow = actionColumnVisibility[role]?.includes(this.context);

    return canShow ? [...baseColumns, 'action'] : baseColumns;
  }

  editElement(element: any) {
    let id = element.BoardId | element.SprintId | element.StoryId | element.EpicId | element.ReleaseId | element.UserId
    console.log("element", element);

    this.router.navigateByUrl(`/update/${this.context?.toLowerCase()}/${id}`)

  }

  openDialog(element: BoardsInterface | UserInterface | SprintsInterface | StoriesInterface | EpicsInterface | ReleaseInterface) {
    let id: number | undefined;

    switch (this.context) {
      case 'Board':
        id = (element as BoardsInterface).boardId;
        break;
      case 'Sprint':
        id = (element as SprintsInterface).sprintId;
        break;
      case 'Story':
        id = (element as StoriesInterface).StoryId;
        break;
      case 'Epic':
        id = (element as EpicsInterface).epicId;
        break;
      case 'Release':
        id = (element as ReleaseInterface).ReleaseId;
        break;
      case 'User':
        id = (element as UserInterface).UserId;
        break;
      default:
        console.error('Unknown context');
        return;
    }

    this.dialog.open
    this.dialog.open(FormViewComponent, {
      data: {
        tableType: this.context,
        id,
        element
      },
      width: '700px'
    });
  }

  deleteElement(element: BoardsInterface | UserInterface | SprintsInterface | StoriesInterface | EpicsInterface | ReleaseInterface) {
    let id;
    if (this.context === 'Board') {
      id = (element as BoardsInterface).boardId
      console.log("Id", id);

      if (id) {
        this.store.dispatch(boardActions.deleteBoard({ id }))
      }
    }
  }

  goToSprintDashboard(boardId: number) {
    if (this.context === 'Board') {
      console.log("BoardId", boardId);

      this.http.get<{ success: boolean, message: string, data: SprintsInterface }>(`${BACKEND_URL}/sprints/${boardId}/active-sprint`).subscribe({
        next: (sprint) => {
          if (sprint.data) {
            this.router.navigateByUrl(`/sprints/dashboard/${sprint?.data?.sprintId}`);
            console.log("Sprintt", sprint);


          } else {
            alert('No active sprint found for this board.');
          }
        },
        error: () => {
          alert('No active sprint found for this board.');
        }
      });
    }
  }

  navToSprintView(sprintId: number) {
    this.router.navigateByUrl(`/sprints/dashboard/${sprintId}`);
  }
}

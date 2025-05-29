import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { actionColumnVisibility, Context } from 'src/app/utils/helper';
import { ColumnConfig } from 'src/app/utils/types';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent {
  @Input() columns: ColumnConfig[] = [];
  @Input() dataSource: any[] = [];
  @Input() context: Context = 'Board';
  userRole: 'manager' | 'lead' | 'developer' = 'manager';

  // get displayedColumns(): string[] {
  //   return [...this.columns.map(c => c.columnDef), 'action'];
  // }

  /*
   *
   */
  constructor(private router: Router) {

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
}

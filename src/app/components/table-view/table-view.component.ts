import { Component, Input } from '@angular/core';
import { ColumnConfig } from 'src/app/utils/types';

@Component({
  selector: 'app-table-view',
  templateUrl: './table-view.component.html',
  styleUrls: ['./table-view.component.scss']
})
export class TableViewComponent {
  @Input() columns: ColumnConfig[] = [];
  @Input() dataSource: any[] = [];

  get displayedColumns(): string[] {
    return this.columns.map(c => c.columnDef);
  }
}

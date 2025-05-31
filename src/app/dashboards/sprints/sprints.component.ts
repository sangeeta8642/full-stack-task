import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAllSprints } from 'src/app/dashboards/sprints/store/sprints.selectors';
import { ColumnConfig, SprintsInterface } from 'src/app/utils/types';

@Component({
  selector: 'app-sprints',
  templateUrl: './sprints.component.html',
  styleUrls: ['./sprints.component.scss']
})
export class SprintsComponent {
  sprints:SprintsInterface[] = [
    // { SprintId: 1, SprintNo: "S1", SprintName: "Sprint Alpha", SprintPoint: 20, StartDate: "2025-05-01", EndDate: "2025-05-15" },
    // { SprintId: 2, SprintNo: "S2", SprintName: "Sprint Beta", SprintPoint: 25, StartDate: "2025-05-16", EndDate: "2025-05-30" },
    // { SprintId: 3, SprintNo: "S3", SprintName: "Sprint Gamma", SprintPoint: 30, StartDate: "2025-06-01", EndDate: "2025-06-15" },
    // { SprintId: 4, SprintNo: "S4", SprintName: "Sprint Delta", SprintPoint: 22, StartDate: "2025-06-16", EndDate: "2025-06-30" },
    // { SprintId: 5, SprintNo: "S5", SprintName: "Sprint Epsilon", SprintPoint: 18, StartDate: "2025-07-01", EndDate: "2025-07-15" }
  ];

  sprintColumns: ColumnConfig[] = [
    {
      columnDef: 'SprintId',
      header: 'ID',
      cell: (element: any) => `${element.SprintId}`
    },
    {
      columnDef: 'SprintNo',
      header: 'Sprint No',
      cell: (element: any) => `${element.SprintNo}`
    },
    {
      columnDef: 'SprintName',
      header: 'Name',
      cell: (element: any) => `${element.SprintName}`
    },
    {
      columnDef: 'SprintPoint',
      header: 'Points',
      cell: (element: any) => `${element.SprintPoint}`
    },
    {
      columnDef: 'StartDate',
      header: 'Start Date',
      cell: (element: any) => new Date(element.StartDate).toLocaleDateString()
    },
    {
      columnDef: 'EndDate',
      header: 'End Date',
      cell: (element: any) => new Date(element.EndDate).toLocaleDateString()
    }
  ];

  constructor(private store: Store) {
    this.store.select(getAllSprints).subscribe(res => (
      this.sprints = res.sprints
    ))
  }

}

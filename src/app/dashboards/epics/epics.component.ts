import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { getAllEpics } from 'src/app/dashboards/epics/store/epics.selectors';
import { ColumnConfig, EpicsInterface } from 'src/app/utils/types';

@Component({
  selector: 'app-epics',
  templateUrl: './epics.component.html',
  styleUrls: ['./epics.component.scss']
})
export class EpicsComponent {
  epics: EpicsInterface[] = []
  epicColumns: ColumnConfig[] = [
    {
      columnDef: "EpicId",
      header: "Epic ID",
      cell: (element) => `${element.EpicId}`
    },
    {
      columnDef: "EpicName",
      header: "Epic Name",
      cell: (element) => `${element.EpicName}`
    },
    {
      columnDef: "Description",
      header: "Description",
      cell: (element) => `${element.Description}`
    }
  ];

  constructor(private store: Store) {
    this.store.select(getAllEpics).subscribe(res => (
      this.epics = res.epics
    ))
  }
}

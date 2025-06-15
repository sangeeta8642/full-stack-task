import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { epicActions } from 'src/app';
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
      cell: (element) => `${element.epicId}`
    },
    {
      columnDef: "EpicName",
      header: "Epic Name",
      cell: (element) => `${element.epicName}`
    },
    {
      columnDef: "Description",
      header: "Description",
      cell: (element) => `${element.description}`
    }
  ];

  constructor(private store: Store) {
    this.store.select(getAllEpics).subscribe(res => (
      this.epics = res.epics
    ))
  }

   ngOnInit(): void {
      this.store.dispatch(epicActions.loadEpics())
    }
}

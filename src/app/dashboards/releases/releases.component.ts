import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { ColumnConfig, ReleaseInterface } from 'src/app/utils/types';
import { getAllReleases } from './store/releases.selectors';

@Component({
  selector: 'app-releases',
  templateUrl: './releases.component.html',
  styleUrls: ['./releases.component.scss']
})
export class ReleasesComponent {



  releaseColumns: ColumnConfig[] = [
    {
      columnDef: 'ReleaseId',
      header: 'ID',
      cell: (element: any) => `${element.ReleaseId}`
    },
    {
      columnDef: 'ReleaseName',
      header: 'Release Name',
      cell: (element: any) => `${element.ReleaseName}`
    },
    {
      columnDef: 'SprintId',
      header: 'Sprint ID',
      cell: (element: any) => `${element.SprintId}`
    }
  ];



  releases:ReleaseInterface[] = [];
  constructor(private store: Store) {
    this.store.select(getAllReleases).subscribe(res => (
      this.releases = res.releases
    ))
  }
}

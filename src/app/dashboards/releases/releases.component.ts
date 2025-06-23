import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ColumnConfig, ReleaseInterface } from 'src/app/utils/types';
import { getAllReleases } from './store/releases.selectors';
import { loadReleases } from './store/releases.action';

@Component({
  selector: 'app-releases',
  templateUrl: './releases.component.html',
  styleUrls: ['./releases.component.scss']
})
export class ReleasesComponent implements OnInit {

  ngOnInit(): void {
    this.store.dispatch(loadReleases())
  }


  releaseColumns: ColumnConfig[] = [
    {
      columnDef: 'ReleaseId',
      header: 'ID',
      cell: (element: any) => `${element.releaseId}`
    },
    {
      columnDef: 'ReleaseName',
      header: 'Release Name',
      cell: (element: any) => `${element.releaseName}`
    },
    {
      columnDef: 'SprintId',
      header: 'Sprint ID',
      cell: (element: any) => `${element.sprintId}`
    }
  ];



  releases: ReleaseInterface[] = [];
  constructor(private store: Store) {
    this.store.select(getAllReleases).subscribe(res => (
      this.releases = res.releases
    ))
  }
}

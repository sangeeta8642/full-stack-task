import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { BoardsInterface, ColumnConfig } from 'src/app/utils/types';
import { getAllBoards } from './store/boards.selector';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent {

  /**
   *
   */


  boards: BoardsInterface[] = [
    // { BoardId: 1, BoardName: "Development" },
    // { BoardId: 2, BoardName: "Marketing" },
    // { BoardId: 3, BoardName: "Sales" },
    // { BoardId: 4, BoardName: "Design" },
    // { BoardId: 5, BoardName: "QA" }
  ];

  constructor(private store: Store) {
    this.store.select(getAllBoards).subscribe(res => (
      this.boards = res.boards
    ))
  }

  boardColumns: ColumnConfig[] = [
    {
      columnDef: 'BoardId',
      header: 'ID',
      cell: (element: any) => `${element.BoardId}`
    },
    {
      columnDef: 'BoardName',
      header: 'Board Name',
      cell: (element: any) => `${element.BoardName}`
    }
  ];
}

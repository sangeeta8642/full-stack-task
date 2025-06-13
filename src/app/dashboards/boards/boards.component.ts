import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { BoardsInterface, ColumnConfig } from 'src/app/utils/types';
import * as boardActions from './store/boards.actions'
import { getAllBoards } from './store/boards.selector';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-boards',
  templateUrl: './boards.component.html',
  styleUrls: ['./boards.component.scss']
})
export class BoardsComponent implements OnInit {

  // boards:Observable<Boa

  boards: BoardsInterface[] = [
    // { BoardId: 1, BoardName: "Development" },
    // { BoardId: 2, BoardName: "Marketing" },
    // { BoardId: 3, BoardName: "Sales" },
    // { BoardId: 4, BoardName: "Design" },
    // { BoardId: 5, BoardName: "QA" }
  ];

  constructor(private store: Store) {
    this.store.select(getAllBoards).subscribe(res => {
      this.boards = res.boards
      console.log("Load boards", res);
    })
  }

  ngOnInit(): void {
    this.store.dispatch(boardActions.loadBoards())
  }

  boardColumns: ColumnConfig[] = [
    {
      columnDef: 'BoardId',
      header: 'ID',
      cell: (element: any) => `${element.boardId}`
    },
    {
      columnDef: 'BoardName',
      header: 'Board Name',
      cell: (element: any) => `${element.boardName}`
    }
  ];
}

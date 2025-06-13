import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as boardActions from './boards.actions'
import { catchError, map, merge, mergeMap, of, switchMap } from "rxjs";
import { BoardService } from "../board.service";
import { BoardsInterface } from "src/app/utils/types";
import { Router } from "@angular/router";

@Injectable()
export class BoardEffect {
    constructor(private actions$: Actions, private boardService: BoardService, private router: Router) { }

    loadBoards$ = createEffect(() =>
        this.actions$.pipe(
            ofType(boardActions.loadBoards),
            switchMap(() => this.boardService.getBoards().pipe(
                map(boards => boardActions.loadBoardsSuccess({ boards })),
                catchError(error => of(boardActions.loadBoardsFailed({ error: error.message })))
            ))
        )
    )

    createBoard$ = createEffect(() =>
        this.actions$.pipe(
            ofType(boardActions.addBoard),
            mergeMap((payload: BoardsInterface) => this.boardService.createBoards(payload).pipe(
                map(res => {
                    console.log("res", res);
                    // const { password, ...userData } = res.data
                    this.router.navigateByUrl('/boards/dashboard')
                    alert(res.message)
                    return boardActions.addBoardSuccess({ board: res.data })
                }),
                catchError(err => of(boardActions.addBoardFailed({ error: err.message })))
            ))
        )
    )

    updateBoard$ = createEffect(() =>
        this.actions$.pipe(
            ofType(boardActions.updateBoard),
            mergeMap(({ id, board }) => {
                return this.boardService.updateBoards(id, board).pipe(
                    map(res => {
                        console.log("res", res);
                        // const { password, ...userData } = res.data
                        this.router.navigateByUrl('/boards/dashboard')
                        alert(res.message)
                        return boardActions.updateBoardSuccess({ id: id, board: res.data })
                    }),
                    catchError(err => {
                        console.log("ERROR :", err);

                        return of(boardActions.updateBoardFailed({ error: err.message }))
                    }
                    )
                ) // hypothetical usage
            })
        )
    )

    deleteBoard$ = createEffect(() =>
        this.actions$.pipe(
            ofType(boardActions.deleteBoard),
            mergeMap(({ id }) => {
                return this.boardService.deleteBoards(id).pipe(
                    map(res => {
                        console.log("res", res);

                        alert(res.message)
                        return boardActions.deleteBoardSuccess({ id })
                    }),
                    catchError(err => {
                        console.log("ERROR:", err);

                        alert("board deletion failed")
                        return of(boardActions.deleteBoardFailed(err.message))
                    }
                    ))

            })
        )
    )


    // addBoard$ = createEffect(()=>(
    //     this.actions$.pipe(
    //         ofType(boardActions.addBoard),
    //         mergeMap(map(boards=>boardActions.addBoardSuccess({boards})))
    //     )
    // ))

}
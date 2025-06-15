import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, merge, mergeMap, of, switchMap } from "rxjs";
import { EpicsInterface } from "src/app/utils/types";
import { Router } from "@angular/router";
import { epicActions } from "src/app";
import { EpicsService } from "../epics.service";

@Injectable()
export class EpicEffect {
    constructor(private actions$: Actions, private epicService: EpicsService, private router: Router) { }

    loadBoards$ = createEffect(() =>
        this.actions$.pipe(
            ofType(epicActions.loadEpics),
            switchMap(() => this.epicService.getEpics().pipe(
                map(epics => epicActions.loadEpicsSuccess({ epics })),
                catchError(error => of(epicActions.loadEpicsFailed({ error: error.message })))
            ))
        )
    )

    createBoard$ = createEffect(() =>
        this.actions$.pipe(
            ofType(epicActions.addEpic),
            mergeMap((payload: EpicsInterface) => this.epicService.createEpics(payload).pipe(
                map(res => {
                    console.log("res", res);
                    // const { password, ...userData } = res.data
                    this.router.navigateByUrl('/epic/dashboard')
                    alert(res.message)
                    return epicActions.addEpicSuccess({ epic: res.data })
                }),
                catchError(err => of(epicActions.addEpicFailed({ error: err.message })))
            ))
        )
    )

    updateBoard$ = createEffect(() =>
        this.actions$.pipe(
            ofType(epicActions.updateEpic),
            mergeMap(({ id, epic }) => {
                return this.epicService.updateEpics(id, epic).pipe(
                    map(res => {
                        console.log("res", res);
                        // const { password, ...userData } = res.data
                        this.router.navigateByUrl('/epic/dashboard')
                        alert(res.message)
                        return epicActions.updateEpicSuccess({ id: id, epic: res.data })
                    }),
                    catchError(err => {
                        console.log("ERROR :", err);

                        return of(epicActions.updateEpicFailed({ error: err.message }))
                    }
                    )
                ) // hypothetical usage
            })
        )
    )

    deleteBoard$ = createEffect(() =>
        this.actions$.pipe(
            ofType(epicActions.deleteEpic),
            mergeMap(({ id }) => {
                return this.epicService.deleteEpics(id).pipe(
                    map(res => {
                        console.log("res", res);

                        alert(res.message)
                        return epicActions.deleteEpicSuccess({ id })
                    }),
                    catchError(err => {
                        console.log("ERROR:", err);

                        alert("board deletion failed")
                        return of(epicActions.deleteEpicFailed(err.message))
                    }
                    ))

            })
        )
    )


    // addBoard$ = createEffect(()=>(
    //     this.actions$.pipe(
    //         ofType(epicActions.addBoard),
    //         mergeMap(map(boards=>epicActions.addBoardSuccess({boards})))
    //     )
    // ))

}
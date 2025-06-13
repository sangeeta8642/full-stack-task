import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, mergeMap, of, switchMap } from "rxjs";
import { SprintsInterface } from "src/app/utils/types";
import { Router } from "@angular/router";
import { sprintActions } from "src/app";
import { SprintsService } from "../sprints.service";

@Injectable()
export class SprintEffect {
    constructor(private actions$: Actions, private sprintService: SprintsService, private router: Router) { }

    loadSprints$ = createEffect(() =>
        this.actions$.pipe(
            ofType(sprintActions.loadSprints),
            switchMap(() => this.sprintService.getSprints().pipe(
                map(sprints => sprintActions.loadSprintsSuccess({ sprints })),
                catchError(error => of(sprintActions.loadSprintsFailed({ error: error.message })))
            ))
        )
    )

    createSprint$ = createEffect(() =>
        this.actions$.pipe(
            ofType(sprintActions.addSprint),
            mergeMap((payload: SprintsInterface) => this.sprintService.createSprint(payload).pipe(
                map(res => {
                    console.log("res", res);
                    // const { password, ...userData } = res.data
                    this.router.navigateByUrl('/sprints/dashboard')
                    alert(res.message)
                    return sprintActions.addSprintSuccess({ sprint: res.data })
                }),
                catchError(err => {
                    console.log("error", err);

                    alert("CREATION FAILED: " + err?.error?.message)
                    return of(sprintActions.addSprintFailed({ error: err.message }))
                })
            ))
        )
    )

    updateSprint$ = createEffect(() =>
        this.actions$.pipe(
            ofType(sprintActions.updateSprint),
            mergeMap(({ id, sprint }) => {
                return this.sprintService.updateSprint(id, sprint).pipe(
                    map(res => {
                        console.log("res", res);
                        // const { password, ...userData } = res.data
                        this.router.navigateByUrl('/sprints/dashboard')
                        alert(res.message)
                        return sprintActions.updateSprintSuccess({ id: id, sprint: res.data })
                    }),
                    catchError(err => {
                        console.log("ERROR :", err);

                        return of(sprintActions.updateSprintFailed({ error: err.message }))
                    }
                    )
                ) // hypothetical usage
            })
        )
    )

    deleteSprint$ = createEffect(() =>
        this.actions$.pipe(
            ofType(sprintActions.deleteSprint),
            mergeMap(({ id }) => {
                return this.sprintService.deleteSprint(id).pipe(
                    map(res => {
                        console.log("res", res);

                        alert(res.message)
                        return sprintActions.deleteSprintSuccess({ id })
                    }),
                    catchError(err => {
                        console.log("ERROR:", err);

                        alert("board deletion failed")
                        return of(sprintActions.deleteSprintFailed(err.message))
                    }
                    ))

            })
        )
    )


    // addBoard$ = createEffect(()=>(
    //     this.actions$.pipe(
    //         ofType(sprintActions.addBoard),
    //         mergeMap(map(Sprints=>sprintActions.addSprintsuccess({Sprints})))
    //     )
    // ))

}
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, merge, mergeMap, of, switchMap } from "rxjs";
import { EpicsInterface, ReleaseInterface } from "src/app/utils/types";
import { Router } from "@angular/router";
import { ReleasesService } from "../releases.service";
import { releaseActions } from "src/app";

@Injectable()
export class ReleaseEffect {
    constructor(private actions$: Actions, private releaseService: ReleasesService, private router: Router) { }

    loadBoards$ = createEffect(() =>
        this.actions$.pipe(
            ofType(releaseActions.loadReleases),
            switchMap(() => this.releaseService.getReleases().pipe(
                map(releases => releaseActions.loadReleasesSuccess({ releases: releases.data })),
                catchError(error => of(releaseActions.loadReleasesFailed({ error: error.message })))
            ))
        )
    )

    createBoard$ = createEffect(() =>
        this.actions$.pipe(
            ofType(releaseActions.addRelease),
            mergeMap((payload: ReleaseInterface) => this.releaseService.createReleases(payload).pipe(
                map(res => {
                    console.log("res", res);
                    // const { password, ...userData } = res.data
                    this.router.navigateByUrl('/releases/dashboard')
                    alert(res.message)
                    return releaseActions.addReleaseSuccess({ release: res.data })
                }),
                catchError(err => of(releaseActions.addReleaseFailed({ error: err.message })))
            ))
        )
    )

    updateBoard$ = createEffect(() =>
        this.actions$.pipe(
            ofType(releaseActions.updateRelease),
            mergeMap(({ id, release }) => {
                return this.releaseService.updateReleases(id, release).pipe(
                    map(res => {
                        console.log("res", res);
                        // const { password, ...userData } = res.data
                        this.router.navigateByUrl('/releases/dashboard')
                        alert(res.message)
                        return releaseActions.updateReleaseSuccess({ id: id, release: res.data })
                    }),
                    catchError(err => {
                        console.log("ERROR :", err);

                        return of(releaseActions.updateReleaseFailed({ error: err.message }))
                    }
                    )
                ) // hypothetical usage
            })
        )
    )

    deleteBoard$ = createEffect(() =>
        this.actions$.pipe(
            ofType(releaseActions.deleteRelease),
            mergeMap(({ id }) => {
                return this.releaseService.deleteReleases(id).pipe(
                    map(res => {
                        console.log("res", res);

                        alert(res.message)
                        return releaseActions.deleteReleaseSuccess({ id })
                    }),
                    catchError(err => {
                        console.log("ERROR:", err);

                        alert("board deletion failed")
                        return of(releaseActions.deleteReleaseFailed(err.message))
                    }
                    ))

            })
        )
    )


    // addBoard$ = createEffect(()=>(
    //     this.actions$.pipe(
    //         ofType(releaseActions.addBoard),
    //         mergeMap(map(boards=>releaseActions.addBoardSuccess({boards})))
    //     )
    // ))

}
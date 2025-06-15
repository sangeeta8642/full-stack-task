import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, merge, mergeMap, of, switchMap } from "rxjs";
import {  StoriesInterface } from "src/app/utils/types";
import { Router } from "@angular/router";
import { StoriesService } from "../stories.service";
import { storyActions } from "src/app";

@Injectable()
export class StoryEffect {
    constructor(private actions$: Actions, private storyService: StoriesService, private router: Router) { }

    loadBoards$ = createEffect(() =>
        this.actions$.pipe(
            ofType(storyActions.loadStories),
            switchMap(() => this.storyService.getStories().pipe(
                map(stories => storyActions.loadStoriesSuccess({ stories })),
                catchError(error => of(storyActions.loadStoriesFailed({ error: error.message })))
            ))
        )
    )

    createBoard$ = createEffect(() =>
        this.actions$.pipe(
            ofType(storyActions.addStory),
            mergeMap((payload: StoriesInterface) => this.storyService.createStory(payload).pipe(
                map(res => {
                    console.log("res", res);
                    // const { password, ...userData } = res.data
                    this.router.navigateByUrl('/stories/dashboard')
                    alert(res.message)
                    return storyActions.addStorySuccess({ story: res.data })
                }),
                catchError(err => of(storyActions.addStoryFailed({ error: err.message })))
            ))
        )
    )

    updateBoard$ = createEffect(() =>
        this.actions$.pipe(
            ofType(storyActions.updateStory),
            mergeMap(({ id, story }) => {
                return this.storyService.updateStory(id, story).pipe(
                    map(res => {
                        console.log("res", res);
                        // const { password, ...userData } = res.data
                        this.router.navigateByUrl('/stories/dashboard')
                        alert(res.message)
                        return storyActions.updateStorySuccess({ id: id, story: res.data })
                    }),
                    catchError(err => {
                        console.log("ERROR :", err);

                        return of(storyActions.updateStoryFailed({ error: err.message }))
                    }
                    )
                ) // hypothetical usage
            })
        )
    )

    deleteBoard$ = createEffect(() =>
        this.actions$.pipe(
            ofType(storyActions.deleteStory),
            mergeMap(({ id }) => {
                return this.storyService.deleteStory(id).pipe(
                    map(res => {
                        console.log("res", res);

                        alert(res.message)
                        return storyActions.deleteStorySuccess({ id })
                    }),
                    catchError(err => {
                        console.log("ERROR:", err);

                        alert("board deletion failed")
                        return of(storyActions.deleteStoryFailed(err.message))
                    }
                    ))

            })
        )
    )


    // addBoard$ = createEffect(()=>(
    //     this.actions$.pipe(
    //         ofType(storyActions.addBoard),
    //         mergeMap(map(boards=>storyActions.addBoardSuccess({boards})))
    //     )
    // ))

}
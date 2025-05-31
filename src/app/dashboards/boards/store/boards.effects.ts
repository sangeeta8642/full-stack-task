import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as boardActions from './boards.actions'
import { map, mergeMap } from "rxjs";

@Injectable()
export class BoardEffect{
    constructor(private actions$:Actions){}

    // addBoard$ = createEffect(()=>(
    //     this.actions$.pipe(
    //         ofType(boardActions.addBoard),
    //         mergeMap(map(boards=>boardActions.addBoardSuccess({boards})))
    //     )
    // ))

}
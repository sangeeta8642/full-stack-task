import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { catchError, map, merge, mergeMap, of, switchMap } from "rxjs";
import { BoardsInterface } from "src/app/utils/types";
import { Router } from "@angular/router";
import { roleActions } from "src/app";
import { RoleService } from "../role.service";

@Injectable()
export class RoleEffect {
    constructor(private actions$: Actions, private roleService: RoleService, private router: Router) { }

    loadBoards$ = createEffect(() =>
        this.actions$.pipe(
            ofType(roleActions.loadRoles),
            switchMap(() => this.roleService.getRoles().pipe(
                map(roles => roleActions.loadRolesSuccess({ roles })),
                catchError(error => of(roleActions.loadRolesFailed({ error: error.message })))
            ))
        )
    )

    // createBoard$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(roleActions.addBoard),
    //         mergeMap((payload: BoardsInterface) => this.roleService.createBoards(payload).pipe(
    //             map(res => {
    //                 console.log("res", res);
    //                 // const { password, ...userData } = res.data
    //                 this.router.navigateByUrl('/boards/dashboard')
    //                 alert(res.message)
    //                 return roleActions.addBoardSuccess({ board: res.data })
    //             }),
    //             catchError(err => of(roleActions.addBoardFailed({ error: err.message })))
    //         ))
    //     )
    // )

    // updateBoard$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(roleActions.updateBoard),
    //         mergeMap(({ id, board }) => {
    //             return this.roleService.updateBoards(id, board).pipe(
    //                 map(res => {
    //                     console.log("res", res);
    //                     // const { password, ...userData } = res.data
    //                     this.router.navigateByUrl('/boards/dashboard')
    //                     alert(res.message)
    //                     return roleActions.updateBoardSuccess({ id: id, board: res.data })
    //                 }),
    //                 catchError(err => {
    //                     console.log("ERROR :", err);

    //                     return of(roleActions.updateBoardFailed({ error: err.message }))
    //                 }
    //                 )
    //             ) // hypothetical usage
    //         })
    //     )
    // )

    // deleteBoard$ = createEffect(() =>
    //     this.actions$.pipe(
    //         ofType(roleActions.deleteBoard),
    //         mergeMap(({ id }) => {
    //             return this.roleService.deleteBoards(id).pipe(
    //                 map(res => {
    //                     console.log("res", res);

    //                     alert(res.message)
    //                     return roleActions.deleteBoardSuccess({ id })
    //                 }),
    //                 catchError(err => {
    //                     console.log("ERROR:", err);

    //                     alert("board deletion failed")
    //                     return of(roleActions.deleteBoardFailed(err.message))
    //                 }
    //                 ))

    //         })
    //     )
    // )


    // addBoard$ = createEffect(()=>(
    //     this.actions$.pipe(
    //         ofType(roleActions.addBoard),
    //         mergeMap(map(boards=>roleActions.addBoardSuccess({boards})))
    //     )
    // ))

}
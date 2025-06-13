import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import * as userActions from './users.actions'
import { catchError, map, mergeMap, of, switchMap } from "rxjs";
import { AuthService } from "src/app/auth/auth.service";
import { loginFirstTimeModel, LoginInterface, UserInterface } from "src/app/utils/types";
import { Router } from "@angular/router";
// import { BoardService } from "../board.service";

@Injectable()
export class UserEffect {
    constructor(private actions$: Actions, private authService: AuthService, private router: Router) { }

    login$ = createEffect(() =>
        this.actions$.pipe(
            ofType(userActions.loginUser),
            mergeMap((payload: LoginInterface) => this.authService.login(payload).pipe(
                map(res => {
                    alert(res.message)
                    this.authService.setToken(res.token)
                    const { password, Password, ...userdata } = res.user
                    this.authService.setUser(userdata)
                    this.router.navigateByUrl('/')
                    return userActions.loginUserSuccess({ user: userdata })
                }),
                catchError(error => {
                    alert("Invalid Credentials")
                    return of(userActions.loginUserFailed({ error: error.message }))
                })
            ))
        )
    )

    loginFirstTime$ = createEffect(() =>
        this.actions$.pipe(
            ofType(userActions.loginFirstTime),
            mergeMap((payload: loginFirstTimeModel) => this.authService.loginFirstTime(payload).pipe(
                map(res => {
                    alert(res.message)
                    this.authService.setToken(res.token)
                    this.authService.setUser(res.user)
                    return userActions.loginUserSuccess({ user: res.user })
                }),
                catchError(error => of(userActions.loginUserFailed({ error: error.message })))
            ))
        )
    )

    addStagedUser$ = createEffect(() =>
        this.actions$.pipe(
            ofType(userActions.addStagedUser),
            mergeMap((payload: UserInterface) => this.authService.createStaggedUser(payload).pipe(
                map(res => {
                    console.log("res", res);
                    const { password, ...userData } = res.data
                    alert(res.message)
                    return userActions.addUserSuccess({ user: userData })
                }),
                catchError(err => of(userActions.addUserFailed({ error: err.message })))
            ))
        )
    )

    // loadUsers$=createEffect(()=>
    // this.actions$.pipe(
    //     ofType(userActions.loadUsers),
    //     mergeMap(()=>)
    // ))

    // addBoard$ = createEffect(()=>(
    //     this.actions$.pipe(
    //         ofType(boardActions.addBoard),
    //         mergeMap(map(boards=>boardActions.addBoardSuccess({boards})))
    //     )
    // ))

}
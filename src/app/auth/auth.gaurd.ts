// guards/app.guard.ts
import { CanActivateFn, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { take, map } from 'rxjs/operators';
import { AuthService } from './auth.service';
import { getAllUsers } from '../dashboards/users/store/users.selectors';

// Guest-only guard (for unauthenticated users only)
export const guestOnlyGuard: CanActivateFn = () => {
    const store = inject(Store);
    const router = inject(Router);
    const authService = inject(AuthService)

    // return 

    // return store.select(isAuthenticated).pipe(
    // take(1),
    // map(auth => {
    console.log("authService.isAuthenticated()", authService.isAuthenticated());

    // if (!authService.isAuthenticated()) return true;
    // router.navigate(['/unauth']);
    // return false;

    return authService.isAuthenticated().pipe(
        take(1),
        map((isAuth) => {
            if (isAuth) {
                router.navigate(['/']);
                return false;
            } else {
                return true;
            }
        })
    )
    // })
    // );
};

// Auth-only guard (for logged-in users only)
export const authOnlyGuard: CanActivateFn = () => {
    const store = inject(Store);
    const router = inject(Router);
    const authService = inject(AuthService)

    // return store.select(isAuthenticated).pipe(
    //     take(1),
    //     map(auth => {

    return authService.isAuthenticated().pipe(
        take(1),
        map((isAuth) => {
            if (isAuth) {
                return true;
            } else {
                router.navigate(['/login']);
                return false;
            }
        })
    )
    //     })
    // );
};

// Role-based guard (e.g., only 'manager' or 'lead')
export const roleBasedGuard: CanActivateFn = () => {
    const store = inject(Store);
    const router = inject(Router);
    const authService = inject(AuthService)
    const allowedRoles = ['manager', 'lead','Team lead'];
    return store.select(getAllUsers).pipe(
        map(res => {
            // const user = authService.getUser()
            const role = res.user?.role?.title || res.user?.roleId
            console.log("Role", role);

            // if (role && allowedRoles.includes(role?.toLowerCase())) return true
            if (role && allowedRoles.includes(role)) return true

            router.navigateByUrl('/unauth')
            return false
        })
    )

};

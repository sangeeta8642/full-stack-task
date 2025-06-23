import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/auth/auth.service';
import { getAllUsers } from 'src/app/dashboards/users/store/users.selectors';
import * as userActions from 'src/app/dashboards/users/store/users.actions';
import { UserInterface } from 'src/app/utils/types';
import { FormViewComponent } from 'src/app/pages/form-view/form-view.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent {
  showFiller: boolean = false
  user: UserInterface | null = null
  isAuth: boolean = false
  role: string = ''

  /**
   *
   */
  constructor(private router: Router, private store: Store, private authService: AuthService, private dialog: MatDialog) {
    this.store.select(getAllUsers).subscribe(res => {
      this.user = res.user
      // console.log("User logged in", this.user);

    })

    this.role = this.authService.getRole()


    this.authService.isAuthenticated().subscribe(res => {
      this.isAuth = res
    })


  }

  redirectToCreate() {
    this.router.navigateByUrl('/create')
  }


  Logout() {
    this.authService.clearToken();
    this.authService.clearUser();
    this.store.dispatch(userActions.logOutUser())
    alert("log out successful")
    this.router.navigateByUrl('/login')
  }

  openDialog() {
    this.dialog.open(FormViewComponent, {
      width: '700px'
    });
  }
  // showFiller() {

  // }
}

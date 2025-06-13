import { Component } from '@angular/core';
import { Store } from '@ngrx/store';
import { loginUserSuccess } from './dashboards/users/store/users.actions';
// import * as use

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'full-stack-task';

  user = localStorage.getItem("user")
  /**
   *
   */
  constructor(private store: Store) {
    if (this.user) {
      console.log("localStorage", JSON.parse(this.user));

      this.store.dispatch(loginUserSuccess({ user: JSON.parse(this.user) }))
    }
  }
}

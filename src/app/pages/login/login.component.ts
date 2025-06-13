import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Store } from '@ngrx/store';
import { AuthService } from 'src/app/auth/auth.service';
import * as userActions from '../../dashboards/users/store/users.actions'
import { loginFirstTimeModel } from 'src/app/utils/types';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formGroup: FormGroup;
  isFirstTime: boolean | null = null;
  step: number = 1;

  constructor(private fb: FormBuilder, private authService: AuthService, private store: Store) {
    this.formGroup = this.fb.group({
      email: ['', Validators.required],
      password: ['', Validators.required],
      newPassword: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.isFirstTime === null) {
      return
    }
    if (this.isFirstTime) {
      const payload: loginFirstTimeModel = {
        email: this.formGroup.value.email,
        defaultPassword: this.formGroup.value.password,
        newPassword: this.formGroup.value.newPassword
      }

      console.log("Payload", payload)

      this.store.dispatch(userActions.loginFirstTime(payload))

    } else if (!this.isFirstTime) {
      const payload = {
        email: this.formGroup.value.email,
        password: this.formGroup.value.password
      }
      this.store.dispatch(userActions.loginUser(payload))
      console.log("Payload", payload)
    }
  }

  checkMail() {
    console.log("this.email", this.formGroup.value.email);

    this.authService.checkEmail(this.formGroup.value.email).subscribe(
      {
        next: (res) => {
          this.step = 2;
          this.isFirstTime = res.status === 'first_time';
          if (res.error) {
            alert(res.error)
            this.isFirstTime = null
          }

        },
        error: (err) => alert(err.error.error || 'Email not found')
      }
    )
  }
}

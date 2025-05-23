import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent {
  formGroup: FormGroup;

  constructor(private fb: FormBuilder) {
    this.formGroup = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
      newPassword: ['', Validators.required]
    });
  }

  onSubmit(): void {
    if (this.formGroup.valid) {
      console.log(this.formGroup.value);
    }
  }
}

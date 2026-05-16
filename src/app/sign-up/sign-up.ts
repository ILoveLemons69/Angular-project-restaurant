import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';
import { UserService } from '../services/user-service';

@Component({
  selector: 'app-sign-up',
  imports: [ReactiveFormsModule],
  templateUrl: './sign-up.html',
  styleUrl: './sign-up.scss',
})
export class Register {
  private fb = inject(FormBuilder);
  private service = inject(UserService);

  public registerForm = this.fb.group({
    firstName: this.fb.control('', [Validators.required]),
    lastName: this.fb.control('', [Validators.required]),
    email: this.fb.control('', [Validators.required]),
    password: this.fb.control('', [Validators.required]),
  });

  public submit() {
    this.service
      .register({
        firstName: this.registerForm.controls.firstName.value ?? '',
        lastName: this.registerForm.controls.lastName.value ?? '',
        email: this.registerForm.controls.email.value ?? '',
        password: this.registerForm.controls.password.value ?? '',
      })
      .subscribe({
        next: (data) => {
          console.log(data);
        },
        error: (error) => {
          console.error(error);
        },
      });
  }
}

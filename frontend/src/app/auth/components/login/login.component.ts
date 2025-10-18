import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  errorMessage: string | null = null;
  successMessage: string | null = null;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.loginForm = this.formBuilder.group({
      username: [
        '',
        [
          Validators.required,
          Validators.pattern('^[a-zA-Z0-9]*$') // No special characters
        ]
      ],
      password: [
        '',
        [
          Validators.required,
          Validators.minLength(8),
          Validators.pattern('^(?=.*[A-Z])(?=.*[0-9]).*$') // At least one capital letter and one number
        ]
      ]
    });
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      // Simulate backend call
      const { username, password } = this.loginForm.value;
      // Replace with actual backend service call
      if (username && password) {
        this.successMessage = 'Login successful!';
        this.errorMessage = null;
      } else {
        this.errorMessage = 'Invalid credentials. Please try again.';
        this.successMessage = null;
      }
    } else {
      this.errorMessage = 'Please fill out all fields correctly.';
      this.successMessage = null;
    }
  }
}

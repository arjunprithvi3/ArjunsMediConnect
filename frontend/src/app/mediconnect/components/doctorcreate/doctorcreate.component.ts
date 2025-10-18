import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-doctor-create',
  templateUrl: './doctorcreate.component.html',
  styleUrls: ['./doctorcreate.component.scss']
})
export class DoctorCreateComponent implements OnInit {
  doctorForm!: FormGroup; // Reactive form for doctor creation
  submitted = false;
  successMessage: string | null = null; // Stores success message after form submission
  errorMessage: string | null = null;   // Stores error message if submission fails

  constructor(private formBuilder: FormBuilder) {}

  // Initializes the reactive doctor form with validators
  ngOnInit(): void {
    this.doctorForm = this.formBuilder.group({
      doctorId: [null, [Validators.required, Validators.min(1)]],
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      specialty: ['', [Validators.required]],
      contactNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      yearsOfExperience: [null, [Validators.required, Validators.min(1)]]
    });

    
  }

  // Submits the doctor form to backend if valid
  onSubmit(): void {
    this.submitted = true;

    if (this.doctorForm.valid) {
      console.log('Doctor Data:', this.doctorForm.value);
      this.successMessage = 'Doctor has been successfully created!';
      this.errorMessage = null;
      this.doctorForm.reset();
      this.submitted = false;
    } else {
      this.successMessage = null;
      this.errorMessage = 'Please fill out all required fields correctly.';
    }
  }

  // Resets the form to initial state
  resetForm(): void {
    this.doctorForm.reset({
      doctorId: null,
      fullName: '',
      specialty: '',
      contactNumber: '',
      email: '',
      yearsOfExperience: null
    });
    this.submitted = false;
    this.successMessage = null;
    this.errorMessage = null;
  }

  // Handles HTTP errors and updates error message
  private handleError(error: HttpErrorResponse): void {
    if (error.error instanceof ErrorEvent) {
      this.errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      this.errorMessage = `Server error: ${error.status} - ${error.message}`;
    }
  }

  // Getters for cleaner template access
  get doctorId() {
    return this.doctorForm.get('doctorId');
  }

  get fullName() {
    return this.doctorForm.get('fullName');
  }

  get specialty() {
    return this.doctorForm.get('specialty');
  }

  get contactNumber() {
    return this.doctorForm.get('contactNumber');
  }

  get email() {
    return this.doctorForm.get('email');
  }

  get yearsOfExperience() {
    return this.doctorForm.get('yearsOfExperience');
  }
}
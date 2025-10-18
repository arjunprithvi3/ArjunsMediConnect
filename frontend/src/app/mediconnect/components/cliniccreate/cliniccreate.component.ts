import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

interface Doctor {
  name: string;
  // Add other relevant fields if needed
}

@Component({
  selector: 'app-clinic-create',
  templateUrl: './cliniccreate.component.html',
  styleUrls: ['./cliniccreate.component.scss']
})
export class ClinicCreateComponent implements OnInit {
  clinicForm!: FormGroup;
  submitted = false;
  successMessage: string | null = null;
  errorMessage: string | null = null;
  doctor: Doctor;

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.clinicForm = this.formBuilder.group({
      doctor: [{ value: this.doctor.name, disabled: true }],
      clinicName: ['', [Validators.required, Validators.minLength(2)]],
      location: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      establishedYear: ['', [Validators.required, Validators.pattern(/^(19|20)\d{2}$/)]]
    });
  }

  onSubmit(): void {
    this.submitted = true;
    if (this.clinicForm.valid) {
      this.successMessage = 'Clinic created successfully!';
      this.errorMessage = null;
      console.log('Clinic Data:', this.clinicForm.getRawValue());
      this.clinicForm.reset();
      this.submitted = false;
    } else {
      this.errorMessage = 'Please correct the errors in the form.';
      this.successMessage = null;
    }
  }

  resetForm(): void {
    this.clinicForm.reset();
    this.submitted = false;
    this.successMessage = null;
    this.errorMessage = null;
  }

  
  private handleError(error: HttpErrorResponse): void{
    if(error.error instanceof ErrorEvent){
        this.errorMessage = `Client-side error: ${error.error.message}`;
    }
    else{
        this.errorMessage = `Server-side error: ${error.status} ${error.message}`;
        if(error.status === 400){
            this.errorMessage = 'Bad request. Please check your input.';
        }
    }
    this.successMessage = '';
    console.log('An error occured:',this.errorMessage);
}

}
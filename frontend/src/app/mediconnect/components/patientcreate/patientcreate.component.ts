import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-patient-create',
  templateUrl: './patientcreate.component.html',
  styleUrls: ['./patientcreate.component.scss']
})
export class PatientCreateComponent implements OnInit {
  patientForm!: FormGroup; // Reactive form for patient input
  submitted = false;
  successMessage: string | null = null; // Stores success messages
  errorMessage: string | null = null;   // Stores error messages

  constructor(private formBuilder: FormBuilder) {}

  ngOnInit(): void {
    this.initializeForm(); // Initializes the form when component loads
  }

  // Sets up the reactive patient form with validators
  initializeForm(): void {
    this.patientForm = this.formBuilder.group({
      patientId: [null, [Validators.required, Validators.min(1)]],
      fullName: ['', [Validators.required, Validators.minLength(2)]],
      dateOfBirth: ['', Validators.required],
      contactNumber: ['', [Validators.required, Validators.pattern(/^\d{10}$/)]],
      email: ['', [Validators.required, Validators.email]],
      address: ['', [Validators.required, Validators.minLength(5)]]
    });
  }

  // Submits the form and calls service to create patient
  onSubmit(): void {
    this.submitted = true;

    if (this.patientForm.valid) {
      // Simulate API call or service interaction
      console.log('Patient Data:', this.patientForm.value);

      this.successMessage = 'Patient created successfully!';
      this.errorMessage = null;

      this.patientForm.reset();
      this.submitted = false;
    } else {
      this.successMessage = null;
      this.errorMessage = 'Please correct the errors in the form.';
    }
  }

  // Resets the form to initial state
  resetForm(): void {
    this.patientForm.reset({
      patientId: null,
      fullName: '',
      dateOfBirth: '',
      contactNumber: '',
      email: '',
      address: ''
    });
    this.submitted = false;
    this.successMessage = null;
    this.errorMessage = null;
  }

  // Handles client-side and server-side errors
  private handleError(error: HttpErrorResponse): void {
    if (error.error instanceof ErrorEvent) {
      // Client-side error
      this.errorMessage = `Client-side error: ${error.error.message}`;
    } else {
      // Server-side error
      this.errorMessage = `Server error: ${error.status} - ${error.message}`;
    }
  }

  // Getters for cleaner template access
  get patientId() {
    return this.patientForm.get('patientId');
  }

  get fullName() {
    return this.patientForm.get('fullName');
  }

  get dateOfBirth() {
    return this.patientForm.get('dateOfBirth');
  }

  get contactNumber() {
    return this.patientForm.get('contactNumber');
  }

  get email() {
    return this.patientForm.get('email');
  }

  get address() {
    return this.patientForm.get('address');
  }
}




// import { Component } from '@angular/core';

// @Component({
//     selector: 'app-patientcreate',
//     templateUrl: './patientcreate.component.html',
//     styleUrls: ['./patientcreate.component.scss']
// })
// export class PatientCreateComponent {
//     // Patient model attributes
//     patient = {
//         patientId: 0,
//         fullName: '',
//         dateOfBirth: '',
//         contactNumber: '',
//         email: '',
//         address: ''
//     };

//     successMessage: string | null = null;
//     errorMessage: string | null = null;

//     // Handle form submission
//     onSubmit(): void {
//         if (this.isFormValid()) {
//             this.successMessage = 'Patient has been successfully created!';
//             this.errorMessage = null;
//             console.log('Patient Created: ', this.patient);
//             this.resetForm(); // Optional, clear the form after submission
//         } else {
//             this.errorMessage = 'Please fill out all required fields correctly.';
//             this.successMessage = null;
//         }
//     }

//     // Validate the form manually
//     isFormValid(): boolean {
//         const { patientId, fullName, dateOfBirth, contactNumber, email, address } = this.patient;

//         if (
//             !patientId ||
//             patientId < 1 ||
//             !fullName ||
//             fullName.length < 2 ||
//             !dateOfBirth ||
//             !contactNumber ||
//             !/^\d{10}$/.test(contactNumber) ||
//             !email ||
//             !/^\S+@\S+\.\S+$/.test(email) ||
//             !address ||
//             address.length < 5
//         ) {
//             return false;
//         }
//         return true;
//     }

//     // Reset the form data
//     resetForm(): void {
//         this.patient = {
//             patientId: 0,
//             fullName: '',
//             dateOfBirth: '',
//             contactNumber: '',
//             email: '',
//             address: ''
//         };
//     }
// }














// import { Component } from "@angular/core";
// import { Patient } from "../../models/Patient";

// @Component({
//     selector: 'app-patient-create',
//     templateUrl: './patientcreate.component.html',
//     styleUrls: ['./patientcreate.component.scss']
// })

// export class PatientCreateComponent {
//     message: string = '';
//     successMessage: string | null = null;
//     errorMessage: string | null = null;

//     patient: Patient;

//     constructor() {
//         this.patient = {
//             patientId: 0,
//             fullName: '',
//             dateOfBirth: '',
//             contactNumber: '',
//             email: '',
//             address: ''
//         };
//     }

//     onSubmit(): void {
//         if (this.isFormValid()) {
//             this.successMessage = "Patient has been successfully created!";
//             this.errorMessage = null;
//             console.log('Patient Created: ', this.patient);
//             this.resetForm();
//         } else {
//             this.errorMessage = "Please fill out all required fields correctly.";
//             this.successMessage = null;
//         }
//     }

//     isFormValid(): boolean {
//         const { patientId, fullName, dateOfBirth, contactNumber, email, address } = this.patient
//         if (!this.patient.patientId || this.patient.patientId < 1
//             || !this.patient.fullName || this.patient.fullName.length < 2
//             || !this.patient.dateOfBirth || !this.patient.contactNumber
//             || !/^\d{10}$/.test(this.patient.contactNumber) ||
//             !this.patient.email || !/^\S+@\S+\.\S+$/.test(this.patient.email) ||
//             !this.patient.address || this.patient.address.length < 5) {
//             return false;
//         }
//         return true;

//         //     if (this.patient.patientId < 1) {
//         //         return false;
//         //     }
//         //     if (!this.patient.fullName || this.patient.fullName.length === 0) {
//         //         return false;
//         //     }
//         //     // if (!this.patient.dateOfBirth || this.patient.dateOfBirth.length === 0) {
//         //     //     return false;
//         //     // }
//         //     if (!this.patient.dateOfBirth || isNaN(this.patient.dateOfBirth.getTime())) {
//         //         return false;
//         //     }
//         //     if (!this.patient.contactNumber || this.patient.contactNumber.length === 0 || this.patient.contactNumber.length > 10) {
//         //         return false;
//         //     }
//         //     if (!this.patient.email || this.patient.email.length === 0) {
//         //         return false;
//         //     }
//         //     if (!this.patient.address || this.patient.address.length === 0) {
//         //         return false;
//         //     }
//         //     return true;
//     }

//     resetForm() {
//         this.patient = {
//             patientId: 0,
//             fullName: '',
//             dateOfBirth: '',
//             contactNumber: '',
//             email: '',
//             address: ''
//         };
//     }
// }
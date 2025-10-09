import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Patient } from '../../models/Patient';

@Component({
  selector: 'app-patientcreate',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './patientcreate.component.html',
  styleUrls: ['./patientcreate.component.scss'],
})
export class PatientCreateComponent {
  patient: Patient;
  successMessage: string = '';
  errorMessage: string = '';

  constructor() {
    this.patient = new Patient(0, '', new Date(), '', '', '');
  }

  onSubmit(): void {
    if (this.isFormValid()) {
      this.successMessage = 'Patient created successfully!';
      this.errorMessage = '';
      console.log('Patient submitted:', this.patient);
    } else {
      this.errorMessage = 'Please fill in all required fields correctly.';
      this.successMessage = '';
    }
  }

  isFormValid(): boolean {
    return (
      this.patient.patientId > 0 &&
      this.patient.fullName.trim() !== '' &&
      this.patient.dateOfBirth !== null &&
      this.patient.contactNumber.trim() !== '' &&
      this.patient.email.trim() !== '' &&
      this.patient.email.includes('@') &&
      this.patient.address.trim() !== ''
    );
  }

  resetForm(): void {
    this.patient = new Patient(0, '', new Date(), '', '', '');
    this.successMessage = '';
    this.errorMessage = '';
  }
}
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Patient } from '../../models/Patient';

@Component({
  selector: 'app-patientsample',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './patientsample.component.html',
  styleUrls: ['./patientsample.component.scss'],
})
export class PatientSampleComponent {
  patient: Patient;

  constructor() {
    this.patient = new Patient(
      1, 
      'John Doe',
      new Date('1990-01-01'), 
      '1234567890', 
      'john@example.com',
      '123 Main Street, Cityville' 
    );
  }

  logPatientAttributes(): void {
    this.patient.logAttributes();
  }
}
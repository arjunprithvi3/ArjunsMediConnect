
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Doctor } from '../../models/Doctor';

@Component({
  selector: 'app-doctorsample',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './doctorsample.component.html',
  styleUrls: ['./doctorsample.component.scss'],
})
export class DoctorSampleComponent {
  doctor: Doctor;

  constructor() {
    this.doctor = new Doctor(
      1, 
      'Dr. Jane Smith', 
      '9876543210', 
      'jane@example.com', 
      'Cardiology',
      15
    );
  }

  logDoctorAttributes(): void {
    this.doctor.logAttributes();
  }
}

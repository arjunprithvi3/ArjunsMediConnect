import { Component, OnInit } from '@angular/core';
import { Clinic } from '../../models/Clinic';
import { Appointment } from '../../models/Appointment';
import { Patient } from '../../models/Patient';
import { MediConnectService } from '../../services/mediconnect.service';
// Adjust import paths as needed

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  doctorDetails: any;
  clinics: Clinic[] = [];
  appointments: Appointment[] = [];
  patients: Patient[] = [];
  role: string | null = null;
  userId: number;
  doctorId: number;
  patientId: number;
  selectedClinicId: number | undefined;
  selectClinicAppointments: Appointment[] = [];

  constructor(private mediconnectService: MediConnectService){}

  ngOnInit(): void {
    this.role = localStorage.getItem('role');
    this.doctorId = Number(localStorage.getItem('doctor_id'));
    if (this.role === 'DOCTOR') {
      this.loadDoctorData();
    }
  }

  loadDoctorData(): void {
    // Logic to load doctor details, clinics, and patients
    this.mediconnectService.getDoctorById(this.doctorId).subscribe((data)=>{
      this.doctorDetails = data;
    })
    this.mediconnectService.getClinicsByDoctorId(this.doctorId).subscribe((data)=>{
      this.clinics = data;
    })
    // this.mediconnectService.getPatientById
  }

  loadAppointments(clinicId: number): void {
    this.mediconnectService.getAppointmentsByClinic(clinicId).subscribe((data) => {
      this.selectClinicAppointments = data;
    });
  }
  

  onClinicSelect(clinic: Clinic): void {
    this.selectedClinicId = clinic.clinicId;
    this.loadAppointments(clinic.clinicId);
  }
}

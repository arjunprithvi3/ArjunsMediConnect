import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { HttpClient } from "@angular/common/http";
import { Observable } from "rxjs";
import { Patient } from "../models/Patient";
import { Doctor } from "../models/Doctor";
import { Clinic } from "../models/Clinic";
import { Appointment } from "../models/Appointment";
import { User } from "../models/User";
import { DoctorDTO } from "../models/DoctorDTO";
import { PatientDTO } from "../models/PatientDTO";

@Injectable({
  providedIn: "root",
})
export class MediConnectService {
  private baseUrl = `${environment.apiUrl}`;

  constructor(private http: HttpClient) {}

  // Patient APIs
  addPatient(patient: Patient): Observable<Patient> {
    return this.http.post<Patient>(`${this.baseUrl}`, patient);
  }

  updatePatient(patient: PatientDTO): Observable<Patient> {
    return this.http.put<Patient>(`${this.baseUrl}`, patient);
  }

  deletePatient(patientId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/${patientId}`);
  }

  getAllPatients(): Observable<Patient[]> {
    return this.http.get<Patient[]>(`${this.baseUrl}`);
  }

  getPatientById(patientId: number): Observable<Patient> {
    return this.http.get<Patient>(`${this.baseUrl}/${patientId}`);
  }

  // Doctor APIs
  addDoctor(doctor: Doctor): Observable<Doctor> {
    return this.http.post<Doctor>(`${this.baseUrl}`, doctor);
  }

  updateDoctor(doctor: DoctorDTO): Observable<Doctor> {
    return this.http.put<Doctor>(`${this.baseUrl}/${doctor.doctorId}`, doctor);
  }

  deleteDoctor(doctorId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/doctors/${doctorId}`);
  }

  getAllDoctors(): Observable<Doctor[]> {
    return this.http.get<Doctor[]>(`${this.baseUrl}/doctors`);
  }

  getDoctorById(doctorId: number): Observable<Doctor> {
    return this.http.get<Doctor>(`${this.baseUrl}/doctors/${doctorId}`);
  }

  // Clinic APIs
  addClinic(clinic: Clinic): Observable<Clinic> {
    return this.http.post<Clinic>(`${this.baseUrl}/clinics`, clinic);
  }

  updateClinic(clinic: Clinic): Observable<Clinic> {
    return this.http.put<Clinic>(`${this.baseUrl}/clinics/${clinic.clinicId}`, clinic);
  }

  deleteClinic(clinicId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/clinics/${clinicId}`);
  }

  getAllClinics(): Observable<Clinic[]> {
    return this.http.get<Clinic[]>(`${this.baseUrl}/clinics`);
  }

  getClinicById(clinicId: number): Observable<Clinic[]> {
    return this.http.get<Clinic[]>(`${this.baseUrl}/clinics/${clinicId}`);
  }

  getClinicsByLocation(location: string): Observable<Clinic[]> {
    return this.http.get<Clinic[]>(`${this.baseUrl}/clinics/location/${location}`);
  }

  getClinicsByDoctorId(doctorId: number): Observable<Clinic[]> {
    return this.http.get<Clinic[]>(`${this.baseUrl}/clinics/doctor/${doctorId}`);
  }

  // Appointment APIs
  createAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.post<Appointment>(`${this.baseUrl}/appointments`, appointment);
  }

  updateAppointment(appointment: Appointment): Observable<Appointment> {
    return this.http.put<Appointment>(`${this.baseUrl}/appointments/${appointment.appointmentId}`, appointment);
  }

  deleteAppointment(appointmentId: number): Observable<any> {
    return this.http.delete<any>(`${this.baseUrl}/appointments/${appointmentId}`);
  }

  getAllAppointments(): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.baseUrl}/appointments`);
  }

  getAppointmentById(appointmentId: number): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.baseUrl}/appointments/${appointmentId}`);
  }

  getAppointmentsByClinic(clinicId: number): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.baseUrl}/appointments/clinic/${clinicId}`);
  }

  getAppointmentsByPatient(patientId: number): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.baseUrl}/appointments/patient/${patientId}`);
  }

  getAppointmentsByStatus(status: string): Observable<Appointment[]> {
    return this.http.get<Appointment[]>(`${this.baseUrl}/appointments/status/${status}`);
  }

  // User APIs
  getUserById(userId: number): Observable<User> {
    return this.http.get<User>(`${this.baseUrl}/users/${userId}`);
  }
}
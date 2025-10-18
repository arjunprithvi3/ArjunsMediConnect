import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { MediConnectRoutingModule } from "./mediconnect-routing.module";
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";

import { PatientCreateComponent } from "./components/patientcreate/patientcreate.component";
import { DoctorCreateComponent } from "./components/doctorcreate/doctorcreate.component";
import { ClinicCreateComponent } from "./components/cliniccreate/cliniccreate.component";
import { AppointmentCreateComponent } from "./components/appointment/appointment.component";
import { AuthInterceptor } from "../auth.interceptors"; // Adjust path as needed
import { DashboardComponent } from "./components/dashboard/dashboard.component";

@NgModule({
  declarations: [
    PatientCreateComponent,
    DoctorCreateComponent,
    ClinicCreateComponent,
    AppointmentCreateComponent,
    DashboardComponent

  ],
  imports: [
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    HttpClientModule,
    MediConnectRoutingModule
  ],
  providers: [
    {
      provide: HTTP_INTERCEPTORS,
      useClass: AuthInterceptor,
      multi: true
    }
  ],
  exports: [
    PatientCreateComponent
  ]
})
export class MediconnectModule {}
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators, AbstractControl } from '@angular/forms';

@Component({
    selector: 'app-appointment',
    templateUrl: './appointment.component.html',
    styleUrls: ['./appointment.component.scss']
})
export class AppointmentCreateComponent implements OnInit {
    appointmentForm!: FormGroup;
    successMessage: string | null = null;
    errorMessage: string | null = null;
    submitted = false;

    constructor(private fb: FormBuilder) { }

    ngOnInit(): void {
        // this.initializeForm();
        this.appointmentForm = this.fb.group({
            appointmentId: [null, [Validators.required, Validators.min(1)]],
            patientId: [null, [Validators.required, Validators.min(1)]],
            clinicId: [null, [Validators.required, Validators.min(1)]],
            appointmentDate: ['', [Validators.required]],
            status: ['', [Validators.required]],
            purpose: ['', [Validators.required, Validators.minLength(5)]]
        });
    }

    // private initializeForm(): void {

    // }

    // private positiveIntegerValidator(control: AbstractControl): { [key: string]: any } | null {
    //     const valid = /^[1-9]\d*$/.test(control.value);
    //     return valid ? null : { invalidInteger: true };
    // }

    // Custom validator for future dates
    private futureDateValidator(control: AbstractControl): { [key: string]: any } | null {
        if (!control.value) return null;
        const selected = new Date(control.value);
        const today = new Date();
        today.setHours(0, 0, 0, 0);
        return selected >= today ? null : { pastDate: true };
    }

    get f() {
        return this.appointmentForm.controls;
    }

    onSubmit(): void {
        // this.submitted = true;
        // this.clearMessages();

        if (this.appointmentForm.invalid) {
            this.errorMessage = 'Please fill out all required fields correctly.';
            this.successMessage = null;
            // this.markAllAsTouched();
            return;
        }

        // const appointmentData = this.appointmentForm.value;
        // console.log('Appointment Data:', appointmentData);
        this.successMessage = `Appointment has been successfully created!`;
        this.errorMessage = null;

        this.resetForm();
    }

    private markAllAsTouched(): void {
        Object.values(this.appointmentForm.controls).forEach(control => control.markAsTouched());
    }

    private clearMessages(): void {
        this.successMessage = null;
        this.errorMessage = null;
    }

    //   resetForm(): void {
    //     this.submitted = false;
    //     this.clearMessages();
    //     this.appointmentForm.reset({
    //       appointmentId: '',
    //       patientId: '',
    //       clinicId: '',
    //       appointmentDate: '',
    //       status: '',
    //       purpose: ''
    //     });
    //   }

    resetForm(): void {
        // this.submitted = false;
        // this.clearMessages();
        this.appointmentForm.reset({
            appointmentId: null,
            patientId: null,
            clinicId: null,
            appointmentDate: '',
            status: '',
            purpose: ''
        });
    }
}
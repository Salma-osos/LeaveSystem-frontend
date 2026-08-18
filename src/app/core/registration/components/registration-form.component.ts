import {Component , EventEmitter, Input, Output, signal, computed, output, input} from '@angular/core';
import {CommonModule} from '@angular/common';
import{FormsModule, ReactiveFormsModule} from '@angular/forms';
import{RegistrationForm} from '../Models/registration.model';

@Component({
  selector: 'app-registration-form',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-page.component.css']
})

export class RegistrationFormComponent {
isLoading = input<boolean>(false);
      formSubmitted = output<RegistrationForm>();

  formData: RegistrationForm = {
    fullName: '',
    email: '',
    password: '',
    confirmPassword: ''
  };

get isPasswordMismatch(): boolean {
    return (
      this.formData.confirmPassword.length > 0 &&
      this.formData.password !== this.formData.confirmPassword
    );
  }
get isFormValid(): boolean {
    return (
      this.formData.fullName.trim() !== '' &&
      this.formData.email.trim() !== '' &&
      this.formData.password.length >= 6 &&
      !this.isPasswordMismatch
    );
  }

onSubmit(): void {
    if (this.isFormValid) {
      this.formSubmitted.emit(this.formData);
    }
  }
}
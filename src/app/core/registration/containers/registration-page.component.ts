import { Component, inject, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RegistrationFormComponent } from '../components/registration-form.component';
import { RegistrationService } from '../../services/registration.service';
import { RegistrationForm , RegistrationRequest} from '../Models/registration.model';
import { finalize } from 'rxjs/operators';
import { Router } from '@angular/router';   
@Component({
  selector: 'app-registration-page',
  standalone: true,
  imports: [CommonModule, RegistrationFormComponent],
  templateUrl: './registration-page.component.html',
  styleUrls: ['./registration-page.component.css']
})
export class RegistrationPageComponent {
  private registrationService = inject(RegistrationService);
  private router = inject(Router);  

   isLoading = signal(false);
  errorMessage = signal<string | null>(null);
  successMessage = signal<string | null>(null);

   handleFormSubmit(formData: RegistrationForm): void {
    if (this.isLoading()) return;
    this.isLoading.set(true);
    this.errorMessage.set(null);
    this.successMessage.set(null);

     const payload: RegistrationRequest = {
      fullName: formData.fullName,
      email: formData.email,
      password: formData.password
    };
     
this.registrationService.registerUser(payload).pipe(
         finalize(() => {
          this.isLoading.set(false);
        })
      ).subscribe({
      next: (res) => {
        this.isLoading.set(false);
     localStorage.setItem('userName', formData.fullName);   
    this.router.navigate(['/dashboard']);
    
    
    },
      
      error: (err) => {
        this.isLoading.set(false);
        this.errorMessage.set(err.error?.message || 'حدث خطأ أثناء الاتصال بالخادم.');
      }
    });  
  }
}
import { Injectable, inject } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';
import { RegistrationResponse, RegistrationRequest } from '../registration/Models/registration.model';

@Injectable({ providedIn: 'root' })
export class RegistrationService {
  private http = inject(HttpClient);
  
  // 💡 تأكدي من المسار الفعلي المكتوب في ملف Program.cs أو Controller بالـ Backend
  private apiUrl = 'https://localhost:7246/api/auth/register'; 

  registerUser(request: RegistrationRequest): Observable<RegistrationResponse> {
    return this.http.post<RegistrationResponse>(this.apiUrl, request).pipe(
      catchError((error: HttpErrorResponse) => {
        console.error('❌ حدث خطأ أثناء الاتصال بالـ API:', error);
        return throwError(() => error);
      })
    );
  }
}
import {Injectable, inject} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {RegistrationResponse,RegistrationRequest} from '../registration/Models/registration.model'

@Injectable({providedIn: 'root'})

export class RegistrationService {
    private http = inject(HttpClient);
    private apiUrl = 'http://localhost:3000/api/register'; // Replace with your actual API endpoint

    registerUser(request: RegistrationRequest): Observable<RegistrationResponse> {
        return this.http.post<RegistrationResponse>(this.apiUrl, request);
    }
}
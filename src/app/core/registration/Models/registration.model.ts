

export interface RegistrationForm {
 fullName: string;
 email: string;
 password: string;
    confirmPassword: string;
}


export interface RegistrationRequest {
  fullName: string;
  email: string;
  password: string;
}

export interface RegistrationResponse {
 success: boolean;
  message: string;
  token?: string;
}   


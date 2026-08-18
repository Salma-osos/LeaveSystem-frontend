export interface LoginRequest {
  email: string;
  password: string;
}

export interface LoginResponse {
  fullName: string;
  role: string;
  token?: string;
}
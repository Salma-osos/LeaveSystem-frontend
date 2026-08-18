import { Component, OnInit, signal, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dashboard-page',
  standalone: true,
  imports: [CommonModule],
  template: `
    <div class="dashboard-card">
      <div class="welcome-content">
        <div class="avatar-icon">👋</div>
        <h1>Welcome, {{ userName() }}!</h1>
        <p>You have successfully logged into your account.</p>
        
        <button class="logout-btn" (click)="logout()">Sign Out</button>
      </div>
    </div>
  `,
  styles: [`
    .dashboard-card {
      max-width: 440px;
      margin: 80px auto;
      padding: 40px 32px;
      background-color: #f8fafc; /* نفس اللون الرصاصي */
      border: 1px solid #e2e8f0;
      border-radius: 16px;
      box-shadow: 0 10px 25px rgba(0, 0, 0, 0.05);
      text-align: center;
      direction: ltr;
      font-family: system-ui, -apple-system, sans-serif;
    }

    .avatar-icon {
      font-size: 48px;
      margin-bottom: 16px;
    }

    h1 {
      font-size: 24px;
      font-weight: 700;
      color: #0f172a;
      margin: 0 0 8px 0;
    }

    p {
      font-size: 15px;
      color: #64748b;
      margin: 0 0 28px 0;
    }

    .logout-btn {
      width: 100%;
      padding: 12px;
      background-color: #ffffff;
      color: #ef4444;
      border: 1.5px solid #fecaca;
      border-radius: 10px;
      font-size: 15px;
      font-weight: 600;
      cursor: pointer;
      transition: all 0.2s ease;
    }

    .logout-btn:hover {
      background-color: #fef2f2;
      border-color: #ef4444;
    }
  `]
})
export class DashboardPageComponent implements OnInit {
  private router = inject(Router);
  userName = signal<string>('User');

  ngOnInit(): void {
    const savedName = localStorage.getItem('userName');
    if (savedName) {
      this.userName.set(savedName);
    }
  }

  logout(): void {
    localStorage.removeItem('userName');
    this.router.navigate(['/register']);
  }
}
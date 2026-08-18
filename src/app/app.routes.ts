import { Routes } from '@angular/router';
import { RegistrationPageComponent  } from './core/registration/containers/registration-page.component'; // تأكدي من صحة مسار الاستيراد
import { DashboardPageComponent } from './features/dashboard/containers/dashboard-page.component'; // تأكدي من صحة مسار الاستيراد
export const routes: Routes = [


    { path: 'register', component: RegistrationPageComponent  },
    { path: 'dashboard', component: DashboardPageComponent }
];

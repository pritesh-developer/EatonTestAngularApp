import { Routes } from '@angular/router';
import { RegistrationComponent } from './registration/registration.component';
import { ForgotPasswordComponent } from './forgot/forgot.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { AuthGuard } from './guards/auth.guard';
import { ProductComponent } from './product/product.component';
import { AddProductComponent } from './add-product/add-product.component';
import { Dashboard1Component} from './dashboard1/dashboard1.component';
import { AlertsComponent } from './alerts/alerts.component';
import { ScheduleComponent} from './schedule/schedule.component';
import { LogComponent } from './log/log.component';

export const appRoutes: Routes = [
    { path: '', component: HomeComponent, canActivate: [AuthGuard] ,
	 children:[
	 {path: 'products', component: ProductComponent},{path: 'add-product', component: AddProductComponent},
	 {path: '', component: Dashboard1Component},{path: 'alerts', component: AlertsComponent},
	  {path: 'schedule', component: ScheduleComponent},{path: 'log', component: LogComponent}
	 ]
	},
    { path: 'login', component: LoginComponent },
    { path: 'registration', component: RegistrationComponent },
    { path: 'forgot', component: ForgotPasswordComponent },
    // otherwise redirect to home
    { path: '**', redirectTo: '' },
];

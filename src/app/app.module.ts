import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import 'hammerjs';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {
    MatIconRegistry,
    MatButtonModule,
    MatCardModule,
    MatCheckboxModule,
    MatChipsModule,
    MatFormFieldModule,
    MatInputModule,
    MatListModule,
    MatOptionModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatToolbarModule,
} from '@angular/material';
import { MatSidenavModule } from "@angular/material/sidenav";
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatIconModule } from '@angular/material/icon';
import { LoginComponent } from './login/login.component';
import { RegistrationComponent } from './registration/registration.component';
import { HomeComponent } from './home/home.component';
import { ForgotPasswordComponent } from './forgot/forgot.component';
import { appRoutes } from './app.routing';
import { AuthGuard } from './guards';
import { AppService } from './app.service';
import { APP_BASE_HREF } from '@angular/common';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { NavigationService } from './services/navigation.service';
import { ProductComponent } from './product/product.component';
import { MatMenuModule } from '@angular/material/menu';
import { FilterPipe} from './common/filter.pipe';
import { AddProductComponent } from './add-product/add-product.component';
import { Dashboard1Component } from './dashboard1/dashboard1.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { LayoutModule } from '@angular/cdk/layout';
import { AlertsComponent } from './alerts/alerts.component';
import { ScheduleComponent } from './schedule/schedule.component';
import { LogComponent } from './log/log.component';

@NgModule({
    imports: [

        BrowserModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatButtonModule,
        MatCheckboxModule,
        MatFormFieldModule,
        MatInputModule,
        MatOptionModule,
        MatSelectModule,
        MatSlideToggleModule,
        MatCardModule,
        MatChipsModule,
        MatToolbarModule,
        MatIconModule,
        MatListModule,
        FlexLayoutModule,
        MatSidenavModule,
		MatMenuModule,
        RouterModule.forRoot(appRoutes),
        MatGridListModule,
        LayoutModule,
    ],
    declarations: [FilterPipe, AppComponent, LoginComponent, HomeComponent, RegistrationComponent, ForgotPasswordComponent, SidebarComponent, HeaderComponent, ProductComponent, AddProductComponent, Dashboard1Component, AlertsComponent, ScheduleComponent, LogComponent],
    bootstrap: [AppComponent],
    providers: [MatIconRegistry, AppService, NavigationService, AuthGuard, { provide: APP_BASE_HREF, useValue: '/' }],
})
export class AppModule {}

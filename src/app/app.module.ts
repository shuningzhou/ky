import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { MaterialModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FlexLayoutModule } from '@angular/flex-layout';

import { AppComponent } from './app.component';
import { TopBarComponent } from './components/top-bar/top-bar.component';
import { LeftNavComponent } from './components/left-nav/left-nav.component';
import { RightSliderComponent } from './components/right-slider/right-slider.component';
import { LoginComponent } from './components/login/login.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { KyFormControlComponent } from './lib/ky-form-control/ky-form-control.component';
import { KyFormItemControlComponent } from './lib/ky-form-item-control/ky-form-item-control.component';
import { ClientFormComponent } from './components/forms/client-form.component';

const appRoutes: Routes = [
  {path:'', component:DashboardComponent},
  {path:'login', component: LoginComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    LeftNavComponent,
    RightSliderComponent,
    LoginComponent,
    DashboardComponent,
    KyFormControlComponent,
    KyFormItemControlComponent,
    ClientFormComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpModule,
    MaterialModule,
    BrowserAnimationsModule,
    RouterModule.forRoot(appRoutes),
    FlexLayoutModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

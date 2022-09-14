import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { NgCalendarModule } from 'ionic2-calendar';
import { CountdownModule } from 'ngx-countdown';
import { Constants } from 'src/core/config/constants';
import { ApiEndpointsService } from 'src/core/services/api-endpoints.service';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginRoutingModule } from './pages/login/login-routing.module';
import { LoginModule } from './pages/login/login.module';



@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    IonicModule.forRoot(),
    AppRoutingModule,
    HttpClientModule,
    LoginRoutingModule,
    LoginModule,
    FormsModule, ReactiveFormsModule, CountdownModule, NgCalendarModule
  ],
  providers: [
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    ApiEndpointsService,
    Constants,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }

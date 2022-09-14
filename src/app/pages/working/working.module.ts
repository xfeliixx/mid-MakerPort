import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WorkingPage } from './working.page';

import { WorkingPageRoutingModule } from './working-routing.module';
import { CreateBookingComponent } from './pages/createBooking/createBooking.component';
import { DeviceDetailComponent } from './pages/device-detail/device-detail.component';
import { NgCalendarModule } from 'ionic2-calendar';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    WorkingPageRoutingModule, NgCalendarModule
  ],
  declarations: [WorkingPage, CreateBookingComponent, DeviceDetailComponent],
  exports: []
})
export class WorkingPageModule { }

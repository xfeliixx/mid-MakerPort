import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookingConfirmationComponent } from './bookingConfirmation/booking-confirmation/booking-confirmation.component';
import { BookingOverviewComponent } from './bookingOverview/booking-overview/booking-overview.component';
import { DeviceConfigComponent } from './device-config/device-config/device-config.component';
import { DevicesDateComponent } from './devicesDate/devices-date/devices-date.component';
import { DeviceDetailComponent } from './device-detail/device-detail.component';
import { DevicesTimeEstimateComponent } from './devicesTimeEstimate/devices-time-estimate/devices-time-estimate.component';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'devices/detail',
    component: DeviceDetailComponent
  },
  {
    path: 'devices/config',
    component: DeviceConfigComponent
  },
  {
    path: 'devices/timeEstimate',
    component: DevicesTimeEstimateComponent
  },
  {
    path: 'devices/date',
    component: DevicesDateComponent
  },
  {
    path: 'devices/booking/overview',
    component: BookingOverviewComponent
  },
  {
    path: 'devices/booking/confimation',
    component: BookingConfirmationComponent
  }
];

@NgModule({
  declarations: [BookingConfirmationComponent,
    BookingOverviewComponent,
    DeviceConfigComponent,
    DevicesDateComponent,
    DeviceDetailComponent,
    DevicesTimeEstimateComponent,],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class PagesModule { }

import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BookingConfirmationComponent } from './pages/bookingConfirmation/booking-confirmation/booking-confirmation.component';
import { BookingOverviewComponent } from './pages/bookingOverview/booking-overview/booking-overview.component';
import { DeviceConfigComponent } from './pages/device-config/device-config/device-config.component';
import { DeviceDetailComponent } from './pages/device-detail/device-detail.component';
import { DevicesDateComponent } from './pages/devicesDate/devices-date/devices-date.component';
import { DevicesTimeEstimateComponent } from './pages/devicesTimeEstimate/devices-time-estimate/devices-time-estimate.component';
import { WorkingPage } from './working.page';

const routes: Routes = [
  {
    path: '',
    component: WorkingPage,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkingPageRoutingModule { }

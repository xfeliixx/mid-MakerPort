import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBookingComponent } from './pages/createBooking/createBooking.component';
import { WorkingPage } from './working.page';
import { DeviceDetailComponent } from './pages/device-detail/device-detail.component';

const routes: Routes = [
  {
    path: '',
    component: WorkingPage,
  },
  {
    path: 'createBooking',
    component: CreateBookingComponent,
  },
  {
    path: 'deviceDetail',
    component: DeviceDetailComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class WorkingPageRoutingModule {}

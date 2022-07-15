import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateBookingComponent } from './pages/createBooking/createBooking.component';
import { WorkingPage } from './working.page';

const routes: Routes = [
  {
    path: '',
    component: WorkingPage,
  },
  {
    path: 'createBooking',
    component: CreateBookingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class WorkingPageRoutingModule { }

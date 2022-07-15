import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { WorkingPage } from './working.page';

import { WorkingPageRoutingModule } from './working-routing.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    WorkingPageRoutingModule
  ],
  declarations: [WorkingPage],
  exports: []
})
export class WorkingPageModule { }

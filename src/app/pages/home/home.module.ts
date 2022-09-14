import { IonicModule } from '@ionic/angular';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';
import { CountdownModule } from 'ngx-countdown';
import { PlayerComponent } from './player/player.component';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    HomePageRoutingModule,
    CountdownModule,
  ],
  declarations: [HomePage, PlayerComponent]
})
export class HomePageModule { }

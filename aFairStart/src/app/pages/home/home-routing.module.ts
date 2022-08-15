import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';
import { PlayerComponent } from './player/player.component';

const routes: Routes = [
  {
    path: '',
    component: HomePage
  },
  {
    path: 'player',
    component: PlayerComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule { }

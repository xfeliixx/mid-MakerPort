import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children: [
      { path: '', pathMatch: 'full', redirectTo: 'login' },
      {
        path: 'login',
        loadChildren: () =>
          import('../../pages/login/login.module').then((m) => m.LoginModule),
      },
      {
        path: 'home',
        loadChildren: () =>
          import('../../pages/home/home.module').then((m) => m.HomePageModule),
      },
      {
        path: 'working',
        loadChildren: () =>
          import('../../pages/working/working.module').then((m) => m.WorkingPageModule),
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule { }

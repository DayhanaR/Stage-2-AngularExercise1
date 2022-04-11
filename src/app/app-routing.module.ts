import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: 'dashboard', loadChildren: () => import('./pages/folder/dashboard/dashboard.module').then(m => m.DashboardModule)},
  {path: 'users', loadChildren: () => import('./pages/folder/users/users.module').then(m => m.UsersModule)},
  {path: 'configurations', loadChildren: () => import('./pages/folder/configurations/configurations.module').then(m => m.ConfigurationsModule)},
  {path: 'profile', loadChildren: () => import('./pages/folder/profile/profile.module').then(m => m.ProfileModule)}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardChartsComponent } from '../../components/dashboard-charts/dashboard-charts.component';

const routes: Routes = [
  {path: '', component: DashboardChartsComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardRoutingModule { }

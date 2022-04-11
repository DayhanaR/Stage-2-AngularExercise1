import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './pages/components/header/header.component';
import { FooterComponent } from './pages/components/footer/footer.component';
import { DashboardChartsComponent } from './pages/components/dashboard-charts/dashboard-charts.component';
import { UserEditComponent } from './pages/components/user-edit/user-edit.component';
import { UserCreateComponent } from './pages/components/user-create/user-create.component';
import { UserListComponent } from './pages/components/user-list/user-list.component';
import { ConfigurationEditComponent } from './pages/components/configuration-edit/configuration-edit.component';
import { ProfileUserComponent } from './pages/components/profile-user/profile-user.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    DashboardChartsComponent,
    UserEditComponent,
    UserCreateComponent,
    UserListComponent,
    ConfigurationEditComponent,
    ProfileUserComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

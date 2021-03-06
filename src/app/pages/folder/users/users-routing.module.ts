import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UserCreateComponent } from '../../components/user-create/user-create.component';
import { UserEditComponent } from '../../components/user-edit/user-edit.component';
import { UserListComponent } from '../../components/user-list/user-list.component';

const routes: Routes = [
  {path: 'user-edit', component: UserEditComponent},
  {path: 'user-create', component: UserCreateComponent},
  {path: 'user-list', component: UserListComponent},
  {path: '', component: UserListComponent},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class UsersRoutingModule { }

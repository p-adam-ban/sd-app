import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { UsersComponent } from './users/users.component';
import { UserSettingsComponent } from './user-settings/user-settings.component';

const routes: Routes = [
  { path: '', redirectTo: '/users', pathMatch: 'full' },
  {path:'users', component:UsersComponent},
  {path:'user-settings/:id', component:UserSettingsComponent}
];

@NgModule({
  imports: [ RouterModule.forRoot(routes) ],
  exports: [ RouterModule ]
})
export class AppRoutingModule { }

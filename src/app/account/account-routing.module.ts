import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomepageComponent } from './homepage/homepage.component';
import { SigninComponent } from './signin/signin.component';
import { RegistrationComponent } from './registration/registration.component';


const routes: Routes = [
  {
    path:'welcome/:id',
    component:HomepageComponent
  },
  {
    path:'signin',
    component:SigninComponent
  },
  {
    path:'register',
    component:RegistrationComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AccountRoutingModule { }

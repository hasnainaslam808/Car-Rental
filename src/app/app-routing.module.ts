import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginEmptyComponent } from './login-empty/login-empty.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { VehicleListingComponent } from './vehicle-listing/vehicle-listing.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ProfileComponent } from './profile/profile.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { HistoryComponent } from './history/history.component';
import { BillingInformationComponent } from './billing-information/billing-information.component';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { OtpComponent } from './otp/otp.component';
import { LoginComponent } from './login/login.component';
import { AppComponent } from './app.component';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

const routes: Routes = [
  {
    path: '',
    component: DashboardComponent
  },
  {
    path:'home' ,
    component:DashboardComponent
  },
  {
    path: 'signup',
    component: SignupComponent
  },
  {
    path:'otp',
    component:OtpComponent
  },
  {
    path:'login',
    component:LoginComponent
  },
  {
    path:'reset-password',
    component:ResetPasswordComponent
  },
  {
    path: 'car-detail/:id',
    component: CarDetailComponent
  },
  {
    path:'billing-information',
    component: BillingInformationComponent
  },
  {
    path: 'forget-password',
    component: ForgetPasswordComponent
  }, {
    path: 'profile',
    component: ProfileComponent
  },
  {
    path: 'favourite',
    component: FavouriteComponent
  }, {
    path: 'history',
    component: HistoryComponent
  },
  {
    path: 'contact-us',
    component: ContactUsComponent
  },
  {
    path: 'login-empty',
    component: LoginEmptyComponent
  },
  {
    path: 'vehicle-listing',
    component: VehicleListingComponent
  },
  {
    path: 'vehicle-listing',
    component: VehicleListingComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

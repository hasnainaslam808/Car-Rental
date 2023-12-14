import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { FooterComponent } from './footer/footer.component';
import { BannerLandingPageComponent } from './banner-landing-page/banner-landing-page.component';
import { CardsComponent } from './cards/cards.component';
import { LoginEmptyComponent } from './login-empty/login-empty.component';
import { AppRoutingModule } from './app-routing.module';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { VehicleListingComponent } from './vehicle-listing/vehicle-listing.component';
import { SignupComponent } from './signup/signup.component';
import { ForgetPasswordComponent } from './forget-password/forget-password.component';
import { ProfileComponent } from './profile/profile.component';
import { FavouriteComponent } from './favourite/favourite.component';
import { HistoryComponent } from './history/history.component';
import { BillingInformationComponent } from './billing-information/billing-information.component';
import{FormsModule}from '@angular/forms';
import { CarDetailComponent } from './car-detail/car-detail.component';
import { ImageSliderDirective } from './image-slider.directive';
import { OtpComponent } from './otp/otp.component';
import { LoginComponent } from './login/login.component';
import{HttpClientModule} from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NgxOtpInputModule } from 'ngx-otp-input';
import { ResetPasswordComponent } from './reset-password/reset-password.component';

// import { ToastrModule } from 'ngx-toastr';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    BannerLandingPageComponent,
    CardsComponent,
    LoginEmptyComponent,
    DashboardComponent,
    ContactUsComponent,
    VehicleListingComponent,
    SignupComponent,
    ForgetPasswordComponent,
    ProfileComponent,
    FavouriteComponent,
    HistoryComponent,
    BillingInformationComponent,
    CarDetailComponent,
    ImageSliderDirective,
    OtpComponent,
    LoginComponent,
    ResetPasswordComponent,
   
    
    
  ],
  imports: [
    FormsModule,
    BrowserModule,
    FontAwesomeModule,
    AppRoutingModule,
    RouterModule.forRoot([]),
    HttpClientModule,
    BrowserAnimationsModule,
    NgbModule,
    NgxOtpInputModule,
    // ToastrModule.forRoot(),
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

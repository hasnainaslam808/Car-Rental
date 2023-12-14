import { Component, OnInit, ViewChildren } from '@angular/core';
import { NgxOtpInputConfig } from 'ngx-otp-input/public-api';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { ActivatedRoute , ActivationEnd, Router } from '@angular/router';
import { ValidateOtp } from '../shared/models/validateOtp.model';
import { interval } from 'rxjs';


@Component({
  selector: 'app-otp',
  templateUrl: './otp.component.html',
  styleUrls: ['./otp.component.css']
})
export class OtpComponent implements OnInit {

  otpObject: ValidateOtp = new ValidateOtp()

  timer: number = 180; // 3 minutes in seconds
  disableContinueButton: boolean = false; // Initially, the button is enabled
  formattedTime: string = this.formatTime(this.timer);

  constructor(private httpService: HttpService, private router: Router, private activeRoute: ActivatedRoute ) { }


  otpInputConfig: NgxOtpInputConfig = {
    otpLength: 6,
    autofocus: true,
    classList: {
      inputBox: "my-super-box-class",
      input: "my-super-class",
      inputFilled: "my-super-filled-class",
      inputDisabled: "my-super-disabled-class",
      inputSuccess: "my-super-success-class",
      inputError: "my-super-error-class"

    }
  }
  ngOnInit(): void {
    this.otpObject.email = history.state.userEmail;
    const timerSubscription = interval(1000).subscribe(() => {
      this.timer--;

      // Check if the timer has reached 0
      if (this.timer === 0) {
        this.disableContinueButton = true; // Disable the button
        timerSubscription.unsubscribe(); // Stop the timer
      }

      // Update the formatted time
      this.formattedTime = this.formatTime(this.timer);
    });

  }

  private formatTime(totalSeconds: number): string {
    const minutes: number = Math.floor(totalSeconds / 60);
    const seconds: number = totalSeconds % 60;
    return `${minutes}:${seconds < 10 ? '0' : ''}${seconds}`;
  }



  getOtpValue(event: any) {
    console.log(event);
    let str = '';
    for (let i = 0; i < event.length; i++) {
      if (event[i] != null)
        str += event[i];
    }

    this.otpObject.enteredOTP = parseInt(str)

  }



otpSubmit() {
  this.httpService.sendOtp(this.otpObject).subscribe((res: any) => {
    let email = '';
    alert("verify successful");
    


    const previousUrl = history.state.fromPath;

    if (previousUrl.includes('signup')) {
      // User came from signup component
      this.router.navigate(['login-empty']);
    } else if (previousUrl.includes('forget-password')) {
      // User came from forget-password component
      
      this.router.navigate(['/reset-password'],{ state: { userEmail:res.data.email} });
    } else {
      // Default navigation logic
      // this.router.navigate(['/default-path']);
    }
  }, (err) => {
    alert(err.error.message);
    console.log(err);
  });
}
}

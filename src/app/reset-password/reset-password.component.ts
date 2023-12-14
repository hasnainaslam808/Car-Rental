import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { resetPassword } from '../shared/models/resetPassword.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-reset-password',
  templateUrl: './reset-password.component.html',
  styleUrls: ['./reset-password.component.css']
})
export class ResetPasswordComponent implements OnInit {
  resetObject: resetPassword = new resetPassword()
  // newPassword: string = '';
  // confirmPassword: string = '';

  showPassword1: boolean = false;
  showPassword2: boolean = false;
  constructor(private httpService: HttpService,private router:Router) { }

  ngOnInit(): void {
   
    this.resetObject.email = history.state.userEmail;
   
  }
  togglePasswordVisibility1() {
    this.showPassword1 = !this.showPassword1;

  }
  togglePasswordVisibility2() {
    this.showPassword2 = !this.showPassword2;

  }

  getPasswordValues(newPassword: string) {
    this.resetObject.newPassword = newPassword;
   
    console.log(this.resetObject.newPassword)
   

    this.setNewPassword()
  }





  setNewPassword() {
    // debugger
    this.httpService.newPassword(this.resetObject).subscribe((res: any) => {
      
      alert("password changed")
      console.log(res)
      this.router.navigate(['/login']);
    }, (err) => {
      alert(err.error.message);
    })
  }
}


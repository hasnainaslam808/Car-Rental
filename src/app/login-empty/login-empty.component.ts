import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';
import { SharedService } from '../services/shared.service';
@Component({
  selector: 'app-login-empty',
  templateUrl: './login-empty.component.html',
  styleUrls: ['./login-empty.component.css']
})
export class LoginEmptyComponent {
  constructor(private httpService: HttpService,private router:Router,private sharedService: SharedService) {
  }
  // showalert: boolean = false;

  password: string = '';
  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;

  }
  onLogin(formValue: any) {
    this.httpService.login(formValue).subscribe((res:any)=>{
    alert("login success");

    //store token in local storage
    localStorage.setItem('user-inn', JSON.stringify(res.data.token));
    // if successful then navigate to login page
    this.router.navigate(['/home']);
    //
    this.sharedService.profileIcon();
    this.sharedService.isAuthenticatedUser.next(true)
    },(err)=>{
      
      alert("login error");
    })
    }
  // login(form: any) {
  //   console.log("testing login");

    // this.httpService.login(form.email, form.password).subscribe(result => {
    //   if (result === null || (result as any[]).length === 0) {
    //     alert("Login failed")
    //   }
    //   alert("succesfully logged in")
      // console.log("here", result);
    //  this.showalert=true
  //   })

  // }
  // ngOnInit(): void {

  //   this.httpService.login(this.email,this.password).subscribe(data => {
  //     console.log(this.email);

  //   })





}




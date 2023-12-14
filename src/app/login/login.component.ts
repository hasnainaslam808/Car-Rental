import { Component, OnInit } from '@angular/core';
import { HttpService } from '../services/http.service';
// import { UserLogin } from '../shared/models/login.model';
import { FormsModule } from '@angular/forms';
import { Router } from '@angular/router';




@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  password: string = '';
  showPassword: boolean = false;

  constructor(private httpService: HttpService, private router: Router) { }
  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;

  }
  // ngOnInit() {
  //   userLoginObj: UserLogin = new UserLogin()
  // }
  onLogin(formValue: any) {
    this.httpService.login(formValue).subscribe((res: any) => {
      alert("login success");
      

      // Store user email in local storage
   
    

      console.log(res);
      this.router.navigate(['/home']);
    }, (err) => {
      alert("login error");
    })
  }
}
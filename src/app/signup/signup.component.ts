import { Component,OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})

export class SignupComponent implements OnInit {

  currentPage: string = ''
ngOnInit(): void {
  this.currentPage = this.activeRoute.snapshot.url[0].path;
}

  constructor(private httpService: HttpService,private router: Router, private activeRoute: ActivatedRoute){

  }
  // ngOnInit(): void {

  //   this.httpService.getUsers().subscribe(data => {
  //     console.log(data);
      
  //   })
    
  //     this.httpService.dataget().subscribe(data => {
  //     console.log(data);
  //    }) 
  // }
  password: string = '';
  showPassword: boolean = false;

  togglePasswordVisibility() {
    this.showPassword = !this.showPassword;
    
  }

  onSubmit(formValue:any){
    this.httpService.setUsers(formValue).subscribe((res:any )=> {
     let email=''
        alert("Data saved successfully")
        // if(res.success){
          
        // }
       console.log(res);
        email = res.data.email;       
        this.router.navigate(['/otp'],{state:{userEmail:email, fromPath: this.currentPage}} );

    },(err)=>{
      alert(err.error.message)
      console.log(err);
      
    })
  
  }

}

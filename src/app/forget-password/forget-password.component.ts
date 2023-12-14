import { Component } from '@angular/core';
import { HttpService } from '../services/http.service';
import { Router ,ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-forget-password',
  templateUrl: './forget-password.component.html',
  styleUrls: ['./forget-password.component.css']
})
export class ForgetPasswordComponent {
  currentPage: string = ''
  
ngOnInit(): void {
  this.currentPage = this.activeRoute.snapshot.url[0].path;
}

constructor(private httpService: HttpService,private router:Router,private activeRoute:ActivatedRoute ) { }

email(formValue: any){
  this.httpService.forgetPasswordEmail(formValue).subscribe((res:any) => {
    alert("email sent")
    let email=' ';
    console.log(res.data.email);
    email = res.data.email;
    this.router.navigate(['/otp'],{state:{userEmail:res.data.email, fromPath: this.currentPage}});
  
  },(err)=>{
    alert(err.error.message);
    })
}
}

import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from '../services/http.service';
import { Router } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-contact-us',
  templateUrl: './contact-us.component.html',
  styleUrls: ['./contact-us.component.css']
})
export class ContactUsComponent {
constructor(private httpService: HttpService,private location: Location){

}

submitMessage(formValue:any){
  this.httpService.contactUs(formValue).subscribe(data => {
     alert("message submitted successfully")
     window.location.reload();

    
 },(err)=>{
   alert( + err.error)
   console.log(err.error.message);

 })

}



}

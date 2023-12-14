import { Component,Renderer2  } from '@angular/core';
import{FormsModule}from '@angular/forms'

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  url1="./assets/images/Image (1).png";
  onselectFile1(e:any){
    if(e.target.files){
      var reader = new FileReader();
      reader.readAsDataURL(e.target.files[0]);
      reader.onload=(event:any)=>{
        this.url1=event.target.result;
      }
    }
    }
url2="./assets/images/li front.jpeg";

onselectFile2(e:any){
if(e.target.files){
  var reader = new FileReader();
  reader.readAsDataURL(e.target.files[0]);
  reader.onload=(event:any)=>{
    this.url2=event.target.result;
  }
}
}
url3="./assets/images/li back.jpeg";

onselectFile3(e:any){
if(e.target.files){
  var reader = new FileReader();
  reader.readAsDataURL(e.target.files[0]);
  reader.onload=(event:any)=>{
    this.url3=event.target.result;
  }
}
}
}

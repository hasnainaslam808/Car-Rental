import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { HttpService } from '../services/http.service';
import{Router} from '@angular/router'
@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  constructor(private dataservice: DataService, private http: HttpService,private route:Router) { }
  

  showFavouriteImage = false;

  toggleImage() {
    this.showFavouriteImage = !this.showFavouriteImage;
  }
  popularCarList: any = [];
  ngOnInit(): void {

    // this.popularCarList = this.dataservice.popularCarList;
    this.getAllCars()
  }

  getAllCars(){
    this.http.getAllCars().subscribe((res:any) => {
      console.log(res.data);      
      this.popularCarList = res.data;
     
    })
  }
 
  // goNext() {
  //   if (localStorage.getItem('user-inn')) {
  //     // Assuming popularCarList is a variable in your component
  //     // and it represents the current car's details
  //     this.route.navigate(['/car-detail', this.popularCarList.id]);
  //   }
  // }

  goNext(car:any) {
    if (localStorage.getItem('user-inn')) {

      this.route.navigate(['/car-detail/'+car._id])
     
      }else{
        this.route.navigate(['/login-empty'])
      }
    }
  }



import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../data.service';

@Component({
  selector: 'app-car-detail',
  templateUrl: './car-detail.component.html',
  styleUrls: ['./car-detail.component.css']
})
export class CarDetailComponent {

  recentCarList:any = [];
  recomendedCarList:any = [];
  constructor(private activeRoute: ActivatedRoute,private dataService:DataService){

  }
  
  ngOnInit(): void {

    this.activeRoute.params.subscribe((result:any)=>{
      console.log(result.id);

      this.recentCarList = this.dataService.recentCarList;
      this.recomendedCarList=this.dataService.recommendedCarList;
    })

 


  }

  showAllReviews = false;

  toggleReviews() {
    this.showAllReviews = !this.showAllReviews;
  }


  reviewList = [
    {
      name: 'Usman',
      description: 'Developer',
      imgUrl: 'img/user',
      date:'27/12/2017',
      feedback:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsa consectetur adipisicing elit. A ipsa nesciuntnesciunt consectetur, commodi eveniet laboriosam accusantium, quia minus, vel dicta ipsam minima tempore'
    },
    {
      name: 'Ali Ahmed',
      description: 'CEO Techclan',
      imgUrl: 'https://picsum.photos/id/10/100/100',
      date:'27/12/2017',
      feedback:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsa consectetur adipisicing elit. A ipsa nesciuntnesciunt consectetur, commodi eveniet laboriosam accusantium, quia minus, vel dicta ipsam minima tempore'
    },
    {
      name: 'Skylar Andrew',
      description: 'HR Department',
      imgUrl: 'https://picsum.photos/id/10/100/100',
      date:'27/12/2017',
      feedback:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsaconsectetur adipisicing elit. A ipsa nesciunt nesciunt consectetur, commodi eveniet laboriosam accusantium, quia minus, vel dicta ipsam minima tempore'
    },
    {
      name: 'Hasnain Aslam',
      description: 'Bussiness Developers',
      imgUrl: 'https://picsum.photos/id/10/100/100',
      date: '2017-',
      feedback:'Lorem ipsum dolor sit amet consectetur adipisicing elit. A ipsa nesciuntconsectetur adipisicing elit. A ipsa nesciunt consectetur, commodi eveniet laboriosam accusantium, quia minus, vel dicta ipsam minima tempore'
    },
  ]

}

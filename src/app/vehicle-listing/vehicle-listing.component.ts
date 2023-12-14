import { Component,ViewChild,ElementRef } from '@angular/core';

@Component({
  selector: 'app-vehicle-listing',
  templateUrl: './vehicle-listing.component.html',
  styleUrls: ['./vehicle-listing.component.css']
})
export class VehicleListingComponent {


  @ViewChild('filter') filter!:ElementRef;
  carsList:any = [];


  ngOnInit(){
    this.carsList = [
      {
        carName: 'Chororla',
        description: 'Sports Car',
        imgUrl: "./assets/images/car.png",
        fuel: '60',
        machinery: 'Manual',
        people: '5',
        price: '2000'
      },
      {
        carName: 'Vezel 2016',
        description: 'Support Car',
        imgUrl: "./assets/images/car.png",
        fuel: '60',
        machinery: 'Manual',
        people: '5',
        price: '2000'
      },
      {
        carName: 'Honda Civic (X)',
        description: 'Support Car',
        imgUrl: "./assets/images/car.png",
        fuel: '60',
        machinery: 'Manual',
        people: '5',
        price: '2000'
      },
      {
        carName: 'Suzuki Swift',
        description: 'Support Car',
        imgUrl: "./assets/images/car.png",
        fuel: '60',
        machinery: 'Manual',
        people: '5',
        price: '2000'
      },
      {
        carName: 'hyundai tucson',
        description: 'Support Car',
        imgUrl: "./assets/images/car.png",
        fuel: '60',
        machinery: 'Manual',
        people: '5',
        price: '2000'
      }
      ,
      {
        carName: 'hyundai tucson',
        description: 'Support Car',
        imgUrl: "./assets/images/car.png",
        fuel: '60',
        machinery: 'Manual',
        people: '5',
        price: '2000'
      } ,
      {
        carName: 'hyundai tucson',
        description: 'Support Car',
        imgUrl: "./assets/images/car.png",
        fuel: '60',
        machinery: 'Manual',
        people: '5',
        price: '2000'
      },
      {
        carName: 'hyundai tucson',
        description: 'Support Car',
        imgUrl: "./assets/images/car.png",
        fuel: '60',
        machinery: 'Manual',
        people: '5',
        price: '2000'
      },
      {
        carName: 'hyundai tucson',
        description: 'Support Car',
        imgUrl: "./assets/images/car.png",
        fuel: '60',
        machinery: 'Manual',
        people: '5',
        price: '2000'
      },
      {
        carName: 'hyu',
        description: 'Support Car',
        imgUrl: "./assets/images/car.png",
        fuel: '60',
        machinery: 'Manual',
        people: '5',
        price: '2000'
      }
    ]
  }
  toggleFilter(){

    let opened = this.filter.nativeElement.classList.contains('show-form');

    if(opened){
      this.filter.nativeElement.classList.remove('show-form');
    }else{
      this.filter.nativeElement.classList.add('show-form');
    }
  }

  
}

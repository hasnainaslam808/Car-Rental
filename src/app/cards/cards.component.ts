import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit{
    carsList:any = [];

    ngOnInit(): void {
      this.carsList = [
        {
          carName: 'Chororla',
          description: 'Sports Car',
          imgUrl: 'https://picsum.photos/id/10/100/100',
          fuel: '60',
          machinery: 'Manual',
          people: '5',
          price: '2000'
        },
        {
          carName: 'Test',
          description: 'Support Car',
          imgUrl: 'https://picsum.photos/id/10/100/100',
          fuel: '60',
          machinery: 'Manual',
          people: '5',
          price: '2000'
        },
        {
          carName: 'Test',
          description: 'Support Car',
          imgUrl: 'https://picsum.photos/id/10/100/100',
          fuel: '60',
          machinery: 'Manual',
          people: '5',
          price: '2000'
        },
        {
          carName: 'Test',
          description: 'Support Car',
          imgUrl: 'https://picsum.photos/id/10/100/100',
          fuel: '60',
          machinery: 'Manual',
          people: '5',
          price: '2000'
        },
        {
          carName: 'Test',
          description: 'Support Car',
          imgUrl: 'https://picsum.photos/id/10/100/100',
          fuel: '60',
          machinery: 'Manual',
          people: '5',
          price: '2000'
        }
      ]
    }
}

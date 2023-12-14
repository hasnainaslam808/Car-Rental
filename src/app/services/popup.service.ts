import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PopupService {

  constructor() { }

  profilePopup:boolean = false;

  openProfilePopup(){
    this.profilePopup = true;
  }

  closePopups(){
    this.profilePopup = false;
    //
  }
}

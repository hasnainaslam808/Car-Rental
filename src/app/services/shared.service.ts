import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService {
  user: any;
  isAuthenticatedUser: BehaviorSubject<boolean> = new BehaviorSubject<boolean>(false);

  constructor() { }
  public profileIcon() {

  }


  

  public get isAuthenticated(): any {
    const token = localStorage.getItem('user-inn');
    if (token)
      return true;
    else
      return false
  }
}

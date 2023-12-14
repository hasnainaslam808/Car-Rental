import { Component, OnInit } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { PopupService } from './services/popup.service';
import { SharedService } from './services/shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'myapp';
  constructor(private router: Router, private popupService: PopupService, private sharedService: SharedService) { }
  ngOnInit() {
    this.router.events.subscribe((evt:any) => {
        if (!(evt instanceof NavigationEnd)) {
            return;
        }
        window.scrollTo(0, 0)
        this.popupService.closePopups()
    });
    if(localStorage.getItem('user-inn')){
      this.sharedService.isAuthenticatedUser.next(true);
    }
}
}

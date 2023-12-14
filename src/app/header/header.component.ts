import { Component, ElementRef, ViewChild, HostListener } from '@angular/core';
import { PopupService } from '../services/popup.service';
import { SharedService } from '../services/shared.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {

  // @ViewChild('subMenu') subMenu!: ElementRef;

  isSubMenuOpen = false;
  isProfileIcon: boolean = false;

  clickedPopup: boolean = false;
  constructor(public popupService: PopupService, private sharedService: SharedService) {

  }

  ngOnInit() { 
    // this.profileIcon()

    this.sharedService.isAuthenticatedUser.subscribe((res) => {
      if (res == true)
        this.isProfileIcon = true;
      else
        this.isProfileIcon = false;
    })
  }


  toggleMenu() {

    // this.isSubMenuOpen = !this.isSubMenuOpen;
    if (this.popupService.profilePopup)
      this.popupService.closePopups()
    else
      this.popupService.openProfilePopup()
  }

  closeMenu() {
    this.isSubMenuOpen = false;
  }


  logOut(){
    localStorage.removeItem('user-inn')
    console.log("logOut");
  }
  // @HostListener('document:click', ['$event'])
  // clickOutside(event: Event) {
  //   if (!this.subMenu.nativeElement.contains(event.target)) {

  //   }
  // }
}

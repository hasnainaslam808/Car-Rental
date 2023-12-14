import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-billing-information',
  templateUrl: './billing-information.component.html',
  styleUrls: ['./billing-information.component.css']
})
export class BillingInformationComponent {

  showContent: boolean = false;

  toggleContent(): void {
    this.showContent = !this.showContent;
  }
}

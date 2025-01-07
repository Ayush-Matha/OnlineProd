import { Component } from '@angular/core';

@Component({
  selector: 'app-product-management',
  templateUrl: './product-management.component.html',
  styleUrl: './product-management.component.scss'
})
export class ProductManagementComponent {

  navItemSelected: string = "CARD";

  onCardViewClicked()
  {
    this.navItemSelected = "";
    this.navItemSelected = "CARD";
  }

  onListViewClicked()
  {
    this.navItemSelected = "";
    this.navItemSelected = "LIST";
  }

  onAddProductClicked()
  {
    this.navItemSelected = "";
    this.navItemSelected = "ADD";
  }

  onCartClicked()
  {
    this.navItemSelected = "";
    this.navItemSelected = "CART";
  }

}

import { Component, OnInit, ViewChild, ElementRef } from "@angular/core";
import { View } from "ui/core/view";

import {
  ProductService,
  productGroup,
} from '../../shared';

@Component({
  selector: "home",
  moduleId: module.id,
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"],
})
export class HomeComponent implements OnInit {

  loading: boolean = false;

  productGroup: productGroup[];
  minOrder: string = "Min order $25";
  totalPrice: string = "$0.00";
  cartCount: number = 0;

  openedId: string = '';

  @ViewChild("orderDialog") orderDialog: ElementRef;

  constructor(
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.loading = true;
    this.productService.getProductGroups()
      .subscribe( data => {
        this.loading = false;
        this.productGroup = data;
      }, error => {
        
      });
  }

  openedGroup(id: string) {
    this.openedId = id;      
  }

  onAdd(productId: string) {
    let orderDialog = <View>this.orderDialog.nativeElement;
    console.log(orderDialog);
    orderDialog.style.visibility = "visible";
  } 
}
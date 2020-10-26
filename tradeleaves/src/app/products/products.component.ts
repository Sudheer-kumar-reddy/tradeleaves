import { Component, OnInit } from '@angular/core';
import { ProductInfoService } from '../product-info.service';
import { ProductList } from '../product-list';

import {NgxPaginationModule} from 'ngx-pagination';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor(private productInfoService: ProductInfoService) { }

  productlist: ProductList[];
  ngOnInit() {
    this.productInfoService.getProudct().subscribe
    (
      data  => {
      this.productlist = data;
    } )

  }
  

  isShow = false;
  remove = true;
  p: number = 1;
  
  selectedproduct: ProductList;
  //product: ProductList
  addproductbtn() {
    this.isShow = !this.isShow;
    // this.selectedproduct = this.productlist[0];
  }
  closePopup() {
    this.isShow = false;
  }
  removeProduct(product: ProductList) {
    this.productlist = this.productlist.filter(item => item !== product);
  }
  removeProducts() {
    this.productlist = [];
  }

  // removeProduct() {
  //   this.remove = !this.remove;

  // }

}

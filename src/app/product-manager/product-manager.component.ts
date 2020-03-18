import { Component, OnInit } from '@angular/core';
import { Product } from '../Product';
import { data } from '../MockData';

@Component({
  selector: 'app-product-manager',
  templateUrl: './product-manager.component.html',
  styleUrls: ['./product-manager.component.css']
})
export class ProductManagerComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  // productt = data;
  products=data;

  removeItem(id) {
    return this.products = this.products.filter(p => p.id != id);
  }
  
  

}
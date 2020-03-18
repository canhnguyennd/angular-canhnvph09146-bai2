import { Component, OnInit, Input } from '@angular/core';
import {Product} from '../Product';
import {data} from '../MockData';

@Component({
  selector: 'app-product-detail',
  templateUrl: './product-detail.component.html',
  styleUrls: ['./product-detail.component.css']
})
export class ProductDetailComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }
  @Input ('data') pro:Product;
}
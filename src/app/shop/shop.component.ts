import { Component, OnInit } from '@angular/core';
import { Product } from '../shared/models/products';
import { ShopService } from './shop.service';

@Component({
  selector: 'app-shop',
  templateUrl: './shop.component.html',
  styleUrls: ['./shop.component.css']
})
export class ShopComponent implements OnInit {
  products: Product[] = [];
  constructor(private shopService:ShopService) { }

  ngOnInit(): void {
    this.shopService.getProducts().subscribe((response: Product[]) => {
      this.products = response;
      console.log('Products:', this.products);
    } , error => {
      console.log(error);
    } );
  }
}

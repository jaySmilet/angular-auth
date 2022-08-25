import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from '../model/product';
import { ProductService } from '../services/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css'],
})
export class ProductComponent implements OnInit {
  products: Product[] = [];
  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService,
  ) {}

  ngOnInit() {
    // Fetch Products from Resolver
    this.products = this.activatedRoute.snapshot.data['products'];
    // Fetch Product as usual
    this.fetchAllProduct();
  }

  // Fetch All Products
  // ---------------------------------------------
  fetchAllProduct(): void {
    this.productService.getProducts().subscribe((res) => {
      this.products = res;
    });
  }
}

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { IDeactivate } from '../../deactivate.guard';
import { Product } from '../../model/product';
import { ProductCategory } from '../../model/product-category.enum';
import { ProductService } from '../../services/product.service';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css'],
})
export class ProductEditComponent implements OnInit, IDeactivate {
  product: Product;
  editedProduct: Product;
  categories: { id: number; value: string }[] = [];

  constructor(
    private activatedRoute: ActivatedRoute,
    private productService: ProductService
  ) {
    Object.keys(ProductCategory).map((value, index) => {
      this.categories.push({ id: index, value: value });
    });
  }

  ngOnInit() {
    this.activatedRoute.paramMap.subscribe((params) => {
      this.productService.getProduct(+params.get('id')).subscribe((res) => {
        this.product = res;
        this.editedProduct = { ...this.product };
      });
    });
  }

  canExit(): Observable<boolean> | Promise<boolean> | boolean {
    if (JSON.stringify(this.product) !== JSON.stringify(this.editedProduct)) {
      return confirm('Changes will be lost!!');
    }
    return true;
  }
}

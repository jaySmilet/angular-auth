import { Injectable } from '@angular/core';
import {
  ActivatedRouteSnapshot,
  Resolve,
  RouterStateSnapshot,
} from '@angular/router';
import { Observable } from 'rxjs';
import { Product } from './model/product';
import { ProductService } from './services/product.service';

@Injectable()
export class ProductResolveService implements Resolve<Product[]> {
  
  constructor(private productService: ProductService) {}

  resolve(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot
  ): Observable<Product[]> | Promise<Product[]> | Product[] {
    return this.productService.getProducts();
  }
}

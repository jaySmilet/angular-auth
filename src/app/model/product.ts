import { ProductCategory } from './product-category.enum';

export class Product {
  product_id: number = 0;
  product_name?: string = '';
  product_price?: number = 0;
  product_color?: string = '';
  product_description?: string = '';
  product_category?: ProductCategory | string = ProductCategory.ELECTRONICS;
}

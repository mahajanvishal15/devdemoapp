import { Component, Signal } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';
// import allProducts from '../products.json';
import { ProductsService } from '../products.service';
import { IProduct } from '../../product.model';

//decorator, which is a function that adds metadata to the class, making it an Angular component  
@Component({
  selector: 'bot-catalog',
  imports: [ProductDetailsComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',

})
export class CatalogComponent {
  products!: Signal<IProduct[]>;

  constructor(private productsService: ProductsService) {

  }

  ngOnInit() {

    this.products = this.productsService.getProducts();
  }


}

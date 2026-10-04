import { Component } from '@angular/core';
import { ProductDetailsComponent } from '../product-details/product-details.component';
import allProducts from '../products.json';

//decorator, which is a function that adds metadata to the class, making it an Angular component  
@Component({
  selector: 'bot-catalog',
  imports: [ProductDetailsComponent],
  templateUrl: './catalog.component.html',
  styleUrl: './catalog.component.scss',

})
export class CatalogComponent {
products = allProducts;

}

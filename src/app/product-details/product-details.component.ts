import { Component, signal, input } from '@angular/core';
import { IProduct } from '../../product.model';
import { CurrencyPipe } from '@angular/common';

@Component({
  selector: 'bot-product-details',
  imports: [CurrencyPipe],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
public product = input.required<IProduct>();
availableInvetory = signal(3);


getImageUrl(product: IProduct){

  return 'images/robot-parts/' + product.imageName;
}

addToCart( event: MouseEvent){
  setTimeout(() => this.availableInvetory.update((p) => p - 1), 100);
 
  console.log(event);
}



}

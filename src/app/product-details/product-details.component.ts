import { Component, signal, input } from '@angular/core';
import { IProduct } from '../../product.model';
import { CurrencyPipe, NgClass } from '@angular/common';
import { CartService } from '../cart.service';

@Component({
  selector: 'bot-product-details',
  imports: [CurrencyPipe, NgClass],
  templateUrl: './product-details.component.html',
  styleUrl: './product-details.component.scss',
})
export class ProductDetailsComponent {
public product = input.required<IProduct>();
availableInvetory = signal(3);

constructor(private cartService: CartService){
  
}


getImageUrl(product: IProduct){

  return 'images/robot-parts/' + product.imageName;
}

addToCart( event: MouseEvent){
  setTimeout(() => this.availableInvetory.update((p) => p - 1), 100);
 
 this.cartService.addToCart(this.product());
}

getPriceClass(){
  return {strikethrough: this.product().discount > 0};


}
}

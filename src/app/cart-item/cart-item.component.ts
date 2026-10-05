import { Component, signal, input } from '@angular/core';
import { CurrencyPipe, NgClass } from '@angular/common';
import { IProduct } from '../../product.model';
import { CartComponent } from '../cart/cart.component';
import { CartService } from '../cart.service';

@Component({
  selector: 'bot-cart-item',
  imports: [CurrencyPipe, NgClass],
  templateUrl: './cart-item.component.html',
  styleUrl: './cart-item.component.scss',
})
export class CartItemComponent {
  public product = input.required<IProduct>();
  availableInvetory = signal(3);

constructor(private cartService: CartService){
}
  getImageUrl(product: IProduct) {

    return 'images/robot-parts/' + product.imageName;
  }

  removeFromCart() {
    this.cartService.removeFromCart(this.product());
  }

  getPriceClass() {
    return { strikethrough: this.product().discount > 0 };


  }
}

import { Component, inject } from '@angular/core';
import { CartService } from '../../services/cart.service';
import { Product } from '../../types/product';
import { CartItem } from '../../types/cart';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [],
  templateUrl: './shopping-cart.component.html',
  styleUrl: './shopping-cart.component.scss'
})
export class ShoppingCartComponent {

  cartService = inject(CartService);
  ngOnInit(){
    this.cartService.init();
  }
  get cartItems(){
    return this.cartService.items;
  }
  sellingPrice(product:Product) {
    return Math.round(product.price - (product.price * product.discount) / 100);
  }
  addToCart(productId: string, quantity:number){
    this.cartService.addToCart(productId,quantity).subscribe(result=>{
      this.cartService.init();
    })
  }
  get totalAmmount(){
    let ammount=0;
    for (let index = 0; index < this.cartItems.length; index++) {
      const element = this.cartItems[index];
      ammount+= this.sellingPrice(element.product)*element.quantity;
    }
    return ammount;
  }
  removeItem(item: CartItem) { // Vai receber como parâmetro o modelo do item que tem ID e quantity
    this.cartService.removeFromCart(item.product._id!).subscribe(result => { // Passo 2: Chama o service para remover pelo ID
      this.cartService.init(); // Passo 3: Atualiza o carrinho após a remoção
    });
  }
   
}

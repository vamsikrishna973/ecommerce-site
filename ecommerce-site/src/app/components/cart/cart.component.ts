// cart.component.ts
import { Component, OnInit } from '@angular/core';
import { Product, ProductService } from '../../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart: Product[] = [];
  productService: any;

  constructor(private router:Router) {}
  

  ngOnInit(): void {
    this.cart = JSON.parse(localStorage.getItem('cart') || '[]');
  }
  

  removeItem(productId: number) {
    this.cart = this.cart.filter(product=> product.id !== productId);
    localStorage.setItem('cart', JSON.stringify(this.cart));
  }
  buyProduct(product: Product):void {
    let shoppingCart =JSON.parse(localStorage.getItem('shoppingCart')|| '[]');
    shoppingCart.push(product);
    localStorage.setItem('shoppingCart',JSON.stringify(shoppingCart));
    alert(`${product.name} added to transaction`);
    this.router.navigateByUrl("/transaction-form" )
  }
}

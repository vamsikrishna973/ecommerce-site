import { Component, OnInit } from '@angular/core';
import { ProductService } from '../../product.service';
import { Router } from '@angular/router';
export interface Product {
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}
@Component({
  selector: 'app-gadgets',
  templateUrl: './gadgets.component.html',
  styleUrls: ['./gadgets.component.css']
})
export class GadgetsComponent implements OnInit {
  products: Product[] = [
    
    { id: 15, name: 'Boat', price: 9.99, description: 'Description for Bluetooth Boat', image: 'https://m.media-amazon.com/images/I/51S7NU-mIWL._SL1500_.jpg' },
    { id: 16, name: 'Boat', price: 15.99, description: 'Description for Airpods Boat', image: 'https://m.media-amazon.com/images/I/614gbl-O98L._SL1500_.jpg' },
    { id: 17, name: 'Noise', price: 10.99, description: 'Description for Airpods Npoise', image: 'https://m.media-amazon.com/images/I/51izdCgYeuL._SL1500_.jpg' },
    { id: 18, name: 'Coaster', price: 49.99, description: 'Description for charger', image: 'https://m.media-amazon.com/images/I/61cAY2WvEuL._SL1500_.jpg' },
    { id: 19, name: 'pTron', price: 5.99, description: 'Description for charger pTron', image: 'https://m.media-amazon.com/images/I/51gz0Mjm5qL._SL1100_.jpg' },
    { id: 20, name: 'Amozonbasics', price: 4.99, description: 'Description for charger Amozonbasiscs', image: 'https://m.media-amazon.com/images/I/51S0y+qrSaL._SL1500_.jpg' },
    { id: 21, name: 'Boat', price: 19.99, description: 'Description for Boat Speaker', image: 'https://m.media-amazon.com/images/I/81M4DVkAbPL._SL1500_.jpg' },
    { id: 22, name: 'JBL', price: 12.99, description: 'Description for JBL Speaker', image: 'https://m.media-amazon.com/images/I/51waOv47fqL._SL1000_.jpg' },
    { id: 22, name: 'Marshall', price: 22.99, description: 'Description for Marshall Speaker', image: 'https://m.media-amazon.com/images/I/61Ab25oO66L._SL1000_.jpg' },
    { id: 22, name: 'Boose', price: 22.99, description: 'Description for Boose Speaker', image: 'https://m.media-amazon.com/images/I/71D+D197S0L._SL1500_.jpg' },


  ];



  constructor(private productService: ProductService,private router:Router) {}

  ngOnInit(): void {
    // this.products = this.productService.getProducts();
  }

  addToCart(product: Product): void {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    alert(`${product.name} added to the cart!`);
    this.router.navigateByUrl("/cart" )
  }
  buyProduct(product: Product):void {
    let shoppingCart =JSON.parse(localStorage.getItem('shoppingCart')|| '[]');
    shoppingCart.push(product);
    localStorage.setItem('shoppingCart',JSON.stringify(shoppingCart));
    alert(`${product.name} added to transaction`);
    this.router.navigateByUrl("/transaction-form" )
  }


}

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
  selector: 'app-mobiles',
  templateUrl: './mobiles.component.html',
  styleUrls: ['./mobiles.component.css']
})
export class MobilesComponent implements OnInit {
  products: Product[] = [
    { id: 1, name: 'vivo', price: 29.99, description: 'Description for product 1', image: 'https://www.mobiledokan.co/wp-content/uploads/2024/01/Vivo-V40-Nebula-Purple.webp' },
    { id: 2, name: 'realme', price: 49.99, description: 'Description for product 2', image: 'https://www.dhresource.com/0x0s/f2-albu-g17-M01-AC-F0-rBVa4l-04CSAEsGhAANodbh1tFc856.jpg/original-realme-q2-5g-mobile-phone-4gb-ram.jpg' },
    { id: 3, name: 'Nokia', price: 49.99, description: 'Description for product 3', image: 'https://media.wired.com/photos/5c003b96ec17240d1c046ffa/4:3/w_2400,c_limit/Nokia-7.1-Gloss-Steel.jpg' },
    { id: 4, name: 'redmi', price: 19.99, description: 'Description for product 4', image: 'https://tse3.mm.bing.net/th?id=OIP.UxJYIZhrr6WfaB1zvIJd2QHaHa&pid=Api&P=0&h=180' },
    { id: 5, name: 'oppo', price: 19.99, description: 'Description for product 5', image: 'https://farm2.staticflickr.com/1904/31005812318_2a8971c140_b.jpg' },
    { id: 6, name: 'sumsung', price: 29.99, description: 'Description for product 6', image: 'https://media.gqindia.com/wp-content/uploads/2016/07/QG-India-samsung-phone-android.jpg' },
  ]
  

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

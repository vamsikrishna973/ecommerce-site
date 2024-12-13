// product-list.component.ts
import { Component, OnInit } from '@angular/core';
import { ProductService, Product } from '../../product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  selectedProduct: any = null; // Store the selected product
  transactionForm = {
    productName: '',
    productPrice: '',
    date: '',
    status: '',
    type: ''
  }

  constructor(private productService: ProductService, private router: Router,) {}
 

  ngOnInit(): void {
    this.products = this.productService.getProducts();
  }

  addToCart(product: Product): void {
    let cart = JSON.parse(localStorage.getItem('cart') || '[]');
    cart.push(product);
    localStorage.setItem('cart', JSON.stringify(cart));
    this.router.navigateByUrl("/cart" )
    
    alert(`${product.name} added to the cart!`);
  }
  
  

  Buy(product: Product):void {
    let shoppingCart =JSON.parse(localStorage.getItem('shoppingCart')|| '[]');
    shoppingCart.push(product);
    localStorage.setItem('shoppingCart',JSON.stringify(shoppingCart));
    alert(`${product.name} added to transaction`);
    this.router.navigateByUrl("/transaction-form" )
  }
  
  }


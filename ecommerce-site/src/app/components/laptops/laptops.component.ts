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
  selector: 'app-laptops',
  templateUrl: './laptops.component.html',
  styleUrls: ['./laptops.component.css']
})
export class LaptopsComponent implements OnInit {
  products: Product[] = [
    
    { id: 7, name: 'Acer', price: 49.99, description: 'Description for laptop acer', image: 'https://www.bwone.com/wp-content/uploads/2020/04/Acer-Aspire-5_A515-44-44G-front-view-Acer-logo.jpg' },
    { id: 8, name: 'Dell', price: 49.99, description: 'Description for laptop Dell', image: 'https://news.thewindowsclub.com/wp-content/uploads/2016/09/Dell-XPS-3-scaled.jpg' },
    { id: 9, name: 'Jio', price: 49.99, description: 'Description for laptop Jio', image: 'https://static.toiimg.com/thumb/msid-94993316,width-1070,height-580,imgsize-11230,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg' },
    { id: 10, name: 'Hp', price: 49.99, description: 'Description for laptop Hp', image: 'https://notebooks.com/wp-content/uploads/2011/02/HP-EliteBook-p-series_front-left-open1.jpg' },
    { id: 11, name: 'Apple', price: 49.99, description: 'Description for laptop Apple', image: 'https://cdn.mos.cms.futurecdn.net/ez5WC9PkBccWYqe9MWbkdH.jpg' },
    { id: 12, name: 'sUMSUNG', price: 49.99, description: 'Description for laptop sumsung', image: 'https://3.bp.blogspot.com/-6O6PM4qT93I/VQxavCMrEUI/AAAAAAAABRI/zGD9SpxhOT8/s1600/Samsung-laptop.jpg' },
    { id: 13, name: 'lenova', price: 49.99, description: 'Description for laptop lenova', image: 'https://www.91-cdn.com/hub/wp-content/uploads/2024/02/Lenovo-IdeaPad-Slim-3-696x696.png' },
    { id: 14, name: 'Asus', price: 49.99, description: 'Description for laptop Asus', image: 'https://www.91-cdn.com/hub/wp-content/uploads/2024/02/ASUS-Vivobook-Go-15-OLED.png' },
    

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

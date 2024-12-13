// product.service.ts
import { Injectable } from '@angular/core';

export interface Product {
  // quantity: number;
  id: number;
  name: string;
  price: number;
  description: string;
  image: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  
  products: Product[] = [

    { id: 1, name: 'vivo', price: 29.99, description: 'Description for product 1', image: 'https://www.mobiledokan.co/wp-content/uploads/2024/01/Vivo-V40-Nebula-Purple.webp' },
    { id: 2, name: 'realme', price: 49.99, description: 'Description for product 2', image: 'https://www.dhresource.com/0x0s/f2-albu-g17-M01-AC-F0-rBVa4l-04CSAEsGhAANodbh1tFc856.jpg/original-realme-q2-5g-mobile-phone-4gb-ram.jpg' },
    { id: 3, name: 'Nokia', price: 49.99, description: 'Description for product 3', image: 'https://media.wired.com/photos/5c003b96ec17240d1c046ffa/4:3/w_2400,c_limit/Nokia-7.1-Gloss-Steel.jpg' },
    { id: 4, name: 'redmi', price: 19.99, description: 'Description for product 4', image: 'https://tse3.mm.bing.net/th?id=OIP.UxJYIZhrr6WfaB1zvIJd2QHaHa&pid=Api&P=0&h=180' },
    { id: 5, name: 'oppo', price: 19.99, description: 'Description for product 5', image: 'https://farm2.staticflickr.com/1904/31005812318_2a8971c140_b.jpg' },
    { id: 6, name: 'sumsung', price: 29.99, description: 'Description for product 6', image: 'https://media.gqindia.com/wp-content/uploads/2016/07/QG-India-samsung-phone-android.jpg' },


    { id: 7, name: 'Acer', price: 49.99, description: 'Description for laptop acer', image: 'https://www.bwone.com/wp-content/uploads/2020/04/Acer-Aspire-5_A515-44-44G-front-view-Acer-logo.jpg' },
    { id: 8, name: 'Dell', price: 49.99, description: 'Description for laptop Dell', image: 'https://news.thewindowsclub.com/wp-content/uploads/2016/09/Dell-XPS-3-scaled.jpg' },
    { id: 9, name: 'Jio', price: 49.99, description: 'Description for laptop Jio', image: 'https://static.toiimg.com/thumb/msid-94993316,width-1070,height-580,imgsize-11230,resizemode-75,overlay-toi_sw,pt-32,y_pad-40/photo.jpg' },
    { id: 10, name: 'Hp', price: 49.99, description: 'Description for laptop Hp', image: 'https://notebooks.com/wp-content/uploads/2011/02/HP-EliteBook-p-series_front-left-open1.jpg' },
    { id: 11, name: 'Apple', price: 49.99, description: 'Description for laptop Apple', image: 'https://cdn.mos.cms.futurecdn.net/ez5WC9PkBccWYqe9MWbkdH.jpg' },
    { id: 12, name: 'sUMSUNG', price: 49.99, description: 'Description for laptop sumsung', image: 'https://3.bp.blogspot.com/-6O6PM4qT93I/VQxavCMrEUI/AAAAAAAABRI/zGD9SpxhOT8/s1600/Samsung-laptop.jpg' },
    { id: 13, name: 'lenova', price: 49.99, description: 'Description for laptop lenova', image: 'https://www.91-cdn.com/hub/wp-content/uploads/2024/02/Lenovo-IdeaPad-Slim-3-696x696.png' },
    { id: 14, name: 'Asus', price: 49.99, description: 'Description for laptop Asus', image: 'https://www.91-cdn.com/hub/wp-content/uploads/2024/02/ASUS-Vivobook-Go-15-OLED.png' },

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
  

  getProducts(): Product[] {
    return this.products;
  }
  addProduct(product: any) {
    this.products.push(product);
  }
  getSelectedProducts():Product[] {
    return this.products;
  }

  clearSelectedProducts() {
    this.products = [];
  }
  

  
  
}

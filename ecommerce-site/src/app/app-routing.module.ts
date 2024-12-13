// import { NgModule } from '@angular/core';
// import { RouterModule, Routes } from '@angular/router';

// const routes: Routes = [];

// @NgModule({
//   imports: [RouterModule.forRoot(routes)],
//   exports: [RouterModule]
// })
// export class AppRoutingModule { }
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './components/product-list/product-list.component';
import { CartComponent } from './components/cart/cart.component';
import { UserLoginComponent } from './user-login/user-login.component';
import { HomeComponent } from './components/home/home.component';
import { MobilesComponent } from './components/mobiles/mobiles.component';
import { LaptopsComponent } from './components/laptops/laptops.component';
import { GadgetsComponent } from './components/gadgets/gadgets.component';
import { TransactionFormComponent } from './transaction-form/transaction-form.component';

const routes: Routes = [
  {path:'',component:HomeComponent},
  {path:'home',component:HomeComponent},
  { path: 'product-list', component: ProductListComponent },
  { path: 'cart', component: CartComponent },
  {path:'user-login',component:UserLoginComponent},
  
  {path:'mobiles',component:MobilesComponent},
  {path:'laptops',component:LaptopsComponent},
  {path:'gadgets',component:GadgetsComponent},
  {path:'transaction-form', component:TransactionFormComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

import { Component, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'
import { AboutusComponent } from './aboutus/aboutus.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { PortfolioComponent } from './portfolio/portfolio.component';
import { MobileComponent } from './product/mobile/mobile.component';
import { ProductComponent } from './product/product.component';
import { TabletComponent } from './product/tablet/tablet.component';
import { TvComponent } from './product/tv/tv.component';
import { WashingMachineComponent } from './product/washing-machine/washing-machine.component';


// **************** routing 1st lec ****************//
const routes: Routes = [
  // redirection krayche asel direct tr by default login page vr tr we use this.
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },  //localhost:4200 default page he active pahije.
  { path: 'aboutus', component: AboutusComponent },  //localhost:4200/aboutus-ase asel tr hi file open zali pahije
  { path: 'contactus', component: ContactusComponent }, //localhost:4200/contactus
  {
    // ************* 2nd lect *******************//
    path: 'product', component:ProductComponent , children: [
      // nested routes & children
    
      { path: 'mobile', component: MobileComponent },  //localhost:4200/product/mobile
      { path: 'tablet', component:TabletComponent },
      { path: 'washing', component: WashingMachineComponent },
      { path: 'tv', component: TvComponent }]
  }, //localhost:4200/product
  {path:'portfolio',component:PortfolioComponent},
  {path:'**',component:PagenotfoundComponent}
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],  //static method to define root route of application
  exports: [RouterModule]
})
export class AppRoutingModule { }

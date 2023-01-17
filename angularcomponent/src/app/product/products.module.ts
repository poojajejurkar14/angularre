import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MobileComponent } from './mobile/mobile.component';
import { TvComponent } from './tv/tv.component';
import { WashingMachineComponent } from './washing-machine/washing-machine.component';
import { TabletComponent } from './tablet/tablet.component';
import {  RouterModule, Routes } from '@angular/router';
import { ProductComponent } from './product.component';
import { UtilityModule } from '../models/utility.module';
// import { CustomdirectiveDirective } from '../customdirective.directive';

const prodRoutes:Routes=[
  {path: 'product ', component:ProductComponent , children: [
    // nested routes & children
  
    { path: 'mobile', component: MobileComponent },  //localhost:4200/product/mobile
    { path: 'tablet', component:TabletComponent },
    { path: 'washing', component: WashingMachineComponent },
    { path: 'tv', component: TvComponent }
  ]},
]


@NgModule({
  declarations: 
  [
    MobileComponent,
    TvComponent,
    WashingMachineComponent,
    TabletComponent,
    ProductComponent
    // CustomdirectiveDirective 
    
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(prodRoutes),  //split/future so we use forchild()
     UtilityModule
  ],
  exports:[           //angular la kse smjnar ki amhi ethe RouterModule use krt ahe so we use this
    RouterModule
  ]
})
export class ProductsModule { }
//we need to split our applications from future module. we can create future module

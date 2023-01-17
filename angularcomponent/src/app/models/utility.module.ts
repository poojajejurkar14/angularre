import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomdirectiveDirective } from '../customdirective.directive';



@NgModule({
  declarations: [
    CustomdirectiveDirective  //shared module
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CustomdirectiveDirective
  ]
})
export class UtilityModule { }

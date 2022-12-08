import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCustomdirective]'
})
export class CustomdirectiveDirective {

  constructor(private el : ElementRef , private render:Renderer2) { 
    console.log("custom directive applied");  //advantage:1) centralize code
    el.nativeElement.style.backgroundColor="gray";
    // el.nativeElement.style.display='none';
    render.setStyle(el.nativeElement,'backgroundColor','skyblue')
  }

}

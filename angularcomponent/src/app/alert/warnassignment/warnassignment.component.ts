import { Component } from "@angular/core";

@Component({
    selector:'warn-app',
    template:`<p class="warn">This is a warning , You are in Danger</p>`,
    styleUrls:['./warnassignment.component.css']
   
})
   
export class warnassignment{
    name:string="warning";
}
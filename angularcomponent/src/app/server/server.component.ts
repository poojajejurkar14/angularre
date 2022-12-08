// creating manual component
import { Component } from "@angular/core";
@Component({    //@:decorator
    selector:'app-server',  //reference or html tag
    template:`<h1>This is my server component</h1>
    <h1 class="test1" id="test1">this is h2 </h1>
    {{name}}`,    //template:inline and templateUrl:external url
    styleUrls:['./server.component.css']
})
export class ServerComponent{
    name:string="codemind";
}
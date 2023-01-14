import { Component, OnInit } from '@angular/core';
import { UtilityService } from './services/utility.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
 
  constructor(private _utilityService:UtilityService){

  }
  ngOnInit(): void {
    this._utilityService.getUserData().subscribe(data =>{
      console.log('getting data form API',data);
      
    })
    this._utilityService.getPostData().subscribe(data =>{
      console.log('post',data);
      
    });
  }
  title = 'angular Batch 4';
}

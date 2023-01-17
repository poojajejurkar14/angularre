import { Component, OnInit } from '@angular/core';
import { Post } from '../models/post';
import { PostService } from '../services/post.service';

@Component({
  selector: 'app-demopost',
  templateUrl: './demopost.component.html',
  styleUrls: ['./demopost.component.css']
})
export class DemopostComponent implements OnInit {
arrPost:Post[]=[]
  constructor(private _postService:PostService) { }

  ngOnInit() {  //it will call at one time, to call the api,it will call when our component initilize succesfully. 
    this._postService.getPost().subscribe(res=>{
      this.arrPost=res; 
      console.log( this.arrPost=res);
      
    })
  }

}

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilityService {
  apiURL='https://jsonplaceholder.typicode.com/'; //free fake api(server)
  // postApiURL='https://jsonplaceholder.typicode.com/posts';//same url ahe fkt ak name change so 
  product=[
    {name:'Laptop',id:'101'},
    {name:'Mobile',id:'102'},
    {name:'TV',id:'103'}
  ]
  constructor(private http:HttpClient) { }  //inject httpClient
  display(){
    alert('subscribed succesfully');
  }
  getUserData()
  {  //obserable
    // this method will give the data from the api
    let users='users';
    return this.http.get(this.apiURL+users);
  }
  getPostData(){
    let posts='posts';
   return this.http.get(this.apiURL+posts)
  }
}

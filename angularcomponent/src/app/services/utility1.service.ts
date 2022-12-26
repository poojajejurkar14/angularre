import { Injectable } from '@angular/core';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'   //this service is available for all component
})
export class Utility1Service {
// userName=new Subject<any>();       //unic obserable //initial value assign nahi kru shakt.
userName=new BehaviorSubject('Angular');    //provide the by default name to the username
  constructor() { }
}

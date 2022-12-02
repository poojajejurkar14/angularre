import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css']
})
export class ServersComponent implements OnInit {
  name:string="codemind";
  serverId:number=31;
  serverStatus:string="offline";
  allowNewServer=false;
  imgUrl="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/512px-Typescript_logo_2020.svg.png?20221110153201";//property binding
  serverCreationStatus:string='server not created';
  serverName:string='codemind.com';
  userName:string='poojajejurkar1403';
  userNameStatus:string=' ';
  constructor() {
    setTimeout(()=>{
      this.allowNewServer=true;
    },5000);
   }
  getserverStatus(){  //also call the methods
    return this.serverStatus;
  }
  onCreateServer(){
    this.userNameStatus='';
  }
  empty(){
    this.userName='';
  }

  ngOnInit() {
  }

}

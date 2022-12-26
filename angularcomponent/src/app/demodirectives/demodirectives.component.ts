import { Component, Input, OnInit } from '@angular/core';
import { Movie } from '../models/movies';
@Component({
  selector: 'app-demodirectives',
  templateUrl: './demodirectives.component.html',
  styleUrls: ['./demodirectives.component.css']
})
export class DemodirectivesComponent implements OnInit {
  @Input() myinputmsg:string;
  @Input() employee:any;
  isShow: boolean = true;
  titles: string = 'Top 3 Movies';
  

  movies: Movie[] = [
    { title: `3 idiot`, director: `Chetan bhagat`, cast: `amir`, realeaseDate: `2012` },
    { title: `RHTM`, director: `raj`, cast: `Madhavn`, realeaseDate: `2012` },
    { title: `Andaj apana apna`, director: `Bhansali`, cast: `amir and salman`, realeaseDate: `2012` }
  ]
  constructor() { }

  ngOnInit() {
    console.log(`From parent`,this.myinputmsg);
    console.log(`form Parent`,this.employee);
    
  }

}

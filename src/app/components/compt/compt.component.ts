import { Component, OnInit } from '@angular/core';
import { Joke } from '../../classes/joke';

@Component({
  selector: 'app-compt',
  templateUrl: './compt.component.html',
  styleUrls: ['./compt.component.css']
})
export class ComptComponent implements OnInit {
  jokes: Joke[];

  constructor() { 
    this.jokes = [    
      new Joke('What did the cheese say when it looked in the mirror?', "hell Hello-Me (Halloumi)"),
      new Joke('What kind of cheese do you use to disguise a small horse?', "boo Mask-a-pony (Mascarpone)"),
      new Joke('A kid threw a lump of cheddar at me', "damn I thought ‘That’s not very mature")       
    ];
  }

  ngOnInit() {
  }

}

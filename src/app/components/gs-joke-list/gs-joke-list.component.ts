import { Component, OnInit } from '@angular/core';
import { Joke } from '../../classes/joke';

@Component({
  selector: 'app-gs-joke-list',
  templateUrl: './gs-joke-list.component.html',
  styleUrls: ['./gs-joke-list.component.css']
})
export class GsJokeListComponent implements OnInit {
  jokes: Joke[];

  addJoke(joke){
    this.jokes.unshift(joke);
  }

  deleteJoke(joke){
    this.jokes.splice(this.jokes.indexOf(joke), 1);
  }
  constructor() {
    // this.jokes = []; 
    this.jokes = [
          new Joke('What did the cheese say when it looked in the mirror?', "hell Hello-Me (Halloumi)"),
          new Joke('What kind of cheese do you use to disguise a small horse?', "boo Mask-a-pony (Mascarpone)"),
          new Joke('A kid threw a lump of cheddar at me', "damn I thought ‘That’s not very mature")
        ];
    // this.jokes = [
    //   {
    //     setup: "What did the cheese say when it looked in the mirror?",
    //     punchline: "Hello-Me (Halloumi)",
    //     hide: false
    //   },
    //   {
    //     setup: "What kind of cheese do you use to disguise a small horse?",
    //     punchline: "Mask-a-pony (Mascarpone)",
    //     hide: false
    //   },
    //   {
    //     setup: "A kid threw a lump of cheddar at me",
    //     punchline: "I thought ‘That’s not very mature’",
    //     hide: false
    //   },
    // ];
  }

  ngOnInit() {
  }

}

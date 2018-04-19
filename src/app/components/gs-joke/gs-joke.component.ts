import { Component, Input, Output, ViewEncapsulation, EventEmitter} from '@angular/core';
import { Joke } from '../../classes/joke';

@Component({
  selector: 'app-gs-joke',
  templateUrl: './gs-joke.component.html',
  styleUrls: ['./gs-joke.component.css'],
})
export class GsJokeComponent {  
  @Input('joke') joke: Joke;

  @Output() jokeDeleted = new EventEmitter<Joke>();

  deleteJoke(){
    this.jokeDeleted.emit(this.joke);
  } 

}

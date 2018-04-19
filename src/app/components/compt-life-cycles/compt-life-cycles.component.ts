import { Component, OnInit, ViewChild, ViewChildren, QueryList, ElementRef, ContentChild } from '@angular/core';
import { Joke } from '../../classes/joke';
import { ComptJokeComponent } from '../compt-joke/compt-joke.component';

@Component({
  selector: 'app-compt-life-cycles',
  templateUrl: './compt-life-cycles.component.html',
  styleUrls: ['./compt-life-cycles.component.css']
})
export class ComptLifeCyclesComponent implements OnInit {

  @ViewChild(ComptJokeComponent) jokeViewChild: ComptJokeComponent; // ngAfterViewInit

  @ViewChildren(ComptJokeComponent) jokeViewChildren: QueryList<ComptJokeComponent>;
  @ViewChild("header") headerEl: ElementRef;
  @ViewChild("header2") headerEl2: ElementRef;

  @ContentChild("contentJoke") jokeContentChild: ElementRef; // I am using <div> in compt.component.html, not ComptJokeComponent

  jokes: Joke[] = [];
  viewJokes: Joke[] = [
    new Joke('I invented a new word!', "Plagiarism!"),
    new Joke('Knock! Knock!', "Control Freak."),
  ];

  addJoke(){
    this.jokes.unshift(new Joke('What did the cheese say when it looked in the mirror?', "hell Hello-Me (Halloumi)"));
  }

  clearJokes(joke){
    this.jokes = [];
  }

  constructor() {  }

  ngOnInit() {  }

  ngAfterViewInit() {
    console.log(`jokeContentChild is ${this.jokeContentChild}`);
    let jokes: ComptJokeComponent[] = this.jokeViewChildren.toArray();
    console.log(jokes);
    console.log('Changing header');
    this.headerEl.nativeElement.style.color = "#009900";
    this.headerEl2.nativeElement.style.color = "#cc9900";

    this.jokeContentChild.nativeElement.style.backgroundColor = "#f5f5ef";
  }
  ngAfterContentInit() {    
    // console.log(`jokeContentChild is ${this.jokeContentChild}`);
  }

}

import { Component, Input, SimpleChanges,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy } from '@angular/core';
import { Joke } from '../../classes/joke';

@Component({
  selector: 'app-compt-joke',
  templateUrl: './compt-joke.component.html',
  styleUrls: ['./compt-joke.component.css']
})
export class ComptJokeComponent implements 
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  OnDestroy {
  @Input('joke') joke: Joke;

  constructor() { 
    // console.log(`new  - data is ${this.joke}`);    
  }

  ngOnChanges(changes: SimpleChanges) {
    // console.log(`ngOnChanges - data is ${this.joke}`);
    // for (let key in changes) {
    //   console.log(`${key} changed.
    //   Current: ${changes[key].currentValue}.
    //   Previous: ${changes[key].previousValue}`);
    // }
  }

  ngOnInit() {
    // console.log(`ngOnInit  - data is ${this.joke}`);
  }

  ngDoCheck() {
    // console.log("ngDoCheck")
  }

  ngAfterContentInit() {
    // console.log("ngAfterContentInit");
  }

  ngAfterContentChecked() {
    // console.log("ngAfterContentChecked");
  }

  ngAfterViewInit() {
    // console.log("ngAfterViewInit");
  }

  ngAfterViewChecked() {
    // console.log("ngAfterViewChecked");
  }

  ngOnDestroy() {
    // console.log("ngOnDestroy");
  }

  

}

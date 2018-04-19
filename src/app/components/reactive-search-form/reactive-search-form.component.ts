import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-reactive-search-form',
  templateUrl: './reactive-search-form.component.html',
  styleUrls: ['./reactive-search-form.component.css']
})
export class ReactiveSearchFormComponent implements OnInit {
  searchField: FormControl;
  searches: string[] = [];

  constructor() { }

  ngOnInit() {
    this.searchField = new FormControl();
    this.searchField.valueChanges
        .debounceTime(800)
        .distinctUntilChanged()
        .subscribe(term => this.searches.push(term));
  }

}

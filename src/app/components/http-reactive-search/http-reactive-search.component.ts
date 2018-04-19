import { Component, OnInit } from '@angular/core';

import { SearchHttpService } from '../../services/search-http.service';
import { SearchJsonpService } from '../../services/search-jsonp.service';

import { SearchItem } from '../../classes/search-item';
import { Observable } from 'rxjs';
import { FormControl } from '@angular/forms';

import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';
import 'rxjs/add/operator/switch';
import 'rxjs/add/operator/switchMap';
import 'rxjs/add/operator/do';

@Component({
  selector: 'app-http-reactive-search',
  templateUrl: './http-reactive-search.component.html',
  styleUrls: ['./http-reactive-search.component.css']
})
export class HttpReactiveSearchComponent implements OnInit {
  private searchField: FormControl;
  private results: Observable<SearchItem[]>
  private loading: boolean = false;

  // constructor(private itunes: SearchHttpService) { } // use http
  constructor(private itunes: SearchJsonpService) { } // use jsonp, works only for GET

  ngOnInit(){
    this.searchField = new FormControl();

    // this.searchField.valueChanges
    //     .debounceTime(400)
    //     .distinctUntilChanged()
    //     .map( term => this.itunes.search(term))
    //     .switch()
    //     .subscribe(obs => {
    //       obs.subscribe(other => console.log(other))
    //     }); // if not use switch

    // this.searchField.valueChanges
    //     .debounceTime(400)
    //     .distinctUntilChanged()
    //     .switchMap( term => this.itunes.search(term))
    //     .subscribe(other => console.log(other));

    this.results = this.searchField.valueChanges
        .debounceTime(400)
        .distinctUntilChanged()
        .do(() => {this.loading = true})
        .switchMap( term => this.itunes.searchObs(term))
        .do(() => {this.loading = false})  ;
  }

}

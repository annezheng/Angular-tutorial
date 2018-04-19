import { Component, OnInit } from '@angular/core';
import { Http, URLSearchParams, RequestOptions, Headers } from '@angular/http';
import { SearchHttpService } from '../../services/search-http.service';
import { SearchItem } from '../../classes/search-item';

import { Observable } from 'rxjs';

@Component({
  selector: 'app-http',
  templateUrl: './http.component.html',
  styleUrls: ['./http.component.css']
})
export class HttpComponent implements OnInit {
  apiRoot: string = "http://httpbin.org";
  loading: boolean = false;
  searchObs: boolean = false;

  // private results: SearchItem[]; // 1. no async pipe
  private results: Observable<SearchItem[]>; // use async pipe

  constructor(private http: Http,
              private itunes: SearchHttpService) { }

  doSearch(term: string){
    this.searchObs = false;
    this.loading = true;
    this.itunes.search(term).then(() => this.loading = false);
  }

  doSearchObs(term: string){
    this.searchObs = true;
    // this.loading = true;
    this.results = this.itunes.searchObs(term);
  }

  // doSearchObs(term: string){
  //   this.searchObs = true;
  //   this.loading = true;
  //   this.itunes.searchObs(term).subscribe((data) => {
  //       this.loading = false;
  //       this.results = data; // define results: SearchItem[];
  //     });
  // }

  doGET(){
    console.log('GET');
    let url = `${this.apiRoot}/get`;
    let search = new URLSearchParams();
    search.set('foo','moo');
    search.set('limit', '25');
    // get?foo=moo&limit=25
    this.http.get(url, {search}).subscribe(res => console.log(res.json()));
    // this.http.get(url).subscribe(res => console.log(res.json()));
  }
  doPOST(){
    console.log('POST');
    let url = `${this.apiRoot}/post`;
    let search = new URLSearchParams();
    search.set('foo','moo');
    search.set('limit', '25');
    this.http.post(url, {moo: 'foo', goo:'loo'}, {search}).subscribe(res => console.log(res.json()));
  }
  doPUT(){
    console.log('PUT');
    let url = `${this.apiRoot}/put`;
    let search = new URLSearchParams();
    search.set('foo','moo');
    search.set('limit', '25');
    this.http.put(url, {moo: 'foo', goo:'loo'}, {search}).subscribe(res => console.log(res.json()));
  }
  doDELETE(){
    console.log('DELETE');
    let url = `${this.apiRoot}/delete`;
    let search = new URLSearchParams();
    search.set('foo','moo');
    search.set('limit', '25');
    this.http.delete(url, {search}).subscribe(res => console.log(res.json()));
  }
  doGETAsPromise(){
    console.log('GETAsPromise');
    let url = `${this.apiRoot}/get`;
    let search = new URLSearchParams();
    search.set('foo','moo');
    search.set('limit', '25');
    this.http.get(url, {search}).toPromise().then(res => console.log(res.json()));

  }
  doGETAsPromiseError(){
    console.log('GETAsPromiseError');
    let url = `${this.apiRoot}/post`;
    let search = new URLSearchParams();
    search.set('foo','moo');
    search.set('limit', '25');
    this.http.get(url, {search})
      .toPromise()
      .then(res => console.log(res.json()))
      .catch(msg => console.error(`Error: ${msg.status} ${msg.statusText}`));
      // .then(
      //   res => console.log(res.json()),
      //   msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
      // ); 
  }
  doGETAsObservableError(){
    console.log('doGETAsObservableError');
    let url = `${this.apiRoot}/post`;
    let search = new URLSearchParams();
    search.set('foo','moo');
    search.set('limit', '25');
    this.http.get(url, {search})
        .subscribe(
          res => console.log(res.json()),
          msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
        );
  }
  doGETWithHeaders(){
    console.log('GETWithHeaders');

    let headers = new Headers();
    headers.append('Authorization', btoa('username:password'));

    let search = new URLSearchParams();
    search.set('foo','moo');
    search.set('limit', '25');

    let opts = new RequestOptions();
    opts.headers = headers;
    opts.search = search;

    let url = `${this.apiRoot}/get`;
    this.http.get(url, opts)
      .subscribe(
        res => console.log(res.json()),
        msg => console.error(`Error: ${msg.status} ${msg.statusText}`)
      );
  }
  ngOnInit() {

  }


}

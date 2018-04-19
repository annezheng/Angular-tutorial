import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import 'rxjs/add/operator/toPromise'; 
import { SearchItem } from '../classes/search-item';

import { Observable } from 'rxjs'
import 'rxjs/add/operator/map'; 


@Injectable()
export class SearchHttpService {
  apiRoot:string = 'https://itunes.apple.com/search';
  results: SearchItem[];

  // using http
  constructor(private http: Http) { 
    this.results = [];    
  }

  search(term: string){
    let promise = new Promise((resolve, reject) => {
      let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
      this.http
          .get(apiURL)
          .toPromise()
          .then(
            res => {
              this.results = res.json().results.map(item => {
                return new SearchItem(
                            item.trackName,
                            item.artistName,
                            item.trackViewUrl,
                            item.artworkUrl60,
                            item.artistId
                          );
              });
              resolve();
            },
            msg => {
              reject();
            }
          )      
    });
    return promise;
  }
  
  searchObs(term: string) : Observable<SearchItem[]> {    
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20`;
    return this.http.get(apiURL)
        .map( res => {
          let results = res.json().results.map( item => {
            return new SearchItem(
              item.trackName,
              item.artistName,
              item.trackViewUrl,
              item.artworkUrl30,
              item.artistId
            );
          })
          return results;
        });      
  }  
 

  /* //using jsonp
  constructor(private jsonp: Jsonp) { 
    this.results = [];    
  }

  search(term: string){
    let promise = new Promise((resolve, reject) => {
      let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`;
      this.jsonp
          .request(apiURL)
          .toPromise()
          .then(
            res => {
              this.results = res.json().results.map(item => {
                return new SearchItem(
                            item.trackName,
                            item.artistName,
                            item.trackViewUrl,
                            item.artworkUrl60,
                            item.artistId
                          );
              });
              resolve();
            },
            msg => {
              reject();
            }
          )      
    });
    return promise;
  }

  searchObs(term: string) : Observable<SearchItem[]> {    
    let apiURL = `${this.apiRoot}?term=${term}&media=music&limit=20&callback=JSONP_CALLBACK`;
    return this.jsonp.request(apiURL)
        .map( res => {
          let results = res.json().results.map( item => {
            return new SearchItem(
              item.trackName,
              item.artistName,
              item.trackViewUrl,
              item.artworkUrl30,
              item.artistId
            );
          })
          return results;
        });      
  }
  */

}

import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http';
import 'rxjs/add/operator/toPromise'; 

import { BookItem } from '../classes/book-item';
import { MAX_RESULTS, DEFAULT_IMAGE } from '../classes/constants';

@Injectable()
export class GoogleBooksService {
  apiRoot:string = 'https://www.googleapis.com/books/v1/volumes';
  // startIndex: number = 0;
  // maxResults: number = 6;
  public totalItems: number = 0; 
  public _page: number = 0;
  public term: string = ""; 
  public loading: boolean = false;
  public initialised: boolean = false;

  results: BookItem[];

  get page(): number {
    return this._page;
  }

  get startIndex() {
    return this.page * MAX_RESULTS;
  }

  get totalPages() {
    try {
      return Math.ceil(this.totalItems / MAX_RESULTS);
    } catch (e) {
      console.error(e);
      return 0;
    }
  }

  set page(val: number) {
    if (val !== this.page) {
      this._page = val;
      this.search(this.term);
    }
  }


  constructor(private http: Http) { 
    this.results = []; 
  }

  public search(term: string) {
    this.term = term;
    this.loading = true;
    this.initialised = true;
    this.results = [];
    this.http.get(`${this.apiRoot}?q=${term}&startIndex=${this.startIndex}&maxResults=${MAX_RESULTS}`)
      .map(res => res.json())
      .do(data => {
        this.totalItems = data.totalItems;
      })
      .map(data => {
        return data.items ? data.items : [];
      })
      .map(items => {
        return items.map(item => this.bookFactory(item))
      })
      // .do(books => console.log(books))
      .do(_ => this.loading = false)
      .subscribe((books) => this.results = books)
  }

  retrieveBook(bookId: string) {
    return this.http.get(`${this.apiRoot}/${bookId}`)
  }

  /*search(term: string){
    this.results = []; 
    this.term = term;
    if (term.indexOf(' ') !== -1){
      term.replace(' ', '+');
    }
    let promise = new Promise((resolve, reject) => {
      let apiURL = `${this.apiRoot}?q=${term}&startIndex=${this.startIndex}&maxResults=${MAX_RESULTS}`;
      this.http
          .get(apiURL)
          .toPromise()
          .then(
            res => {  
              console.log('res', res.json());  
              this.totalItems = res.json().totalItems;
              if (this.totalItems > 0 && res.json().items) {
                console.log('res.json()', res.json())
                this.results = res.json().items.map(item => {                   
                  return this.bookFactory(item);
                });              
              }               
              resolve();
            },
            msg => {
              reject();
            }
          )      
    });
    return promise;
  }*/

  private bookFactory(item: any): BookItem {
    return new BookItem(
      item.id,
      item.volumeInfo.title,
      // item.volumeInfo.authors.toString(),      
      item.volumeInfo.authors ? item.volumeInfo.authors.toString() : ['Unknown Author'],   
      item.volumeInfo.imageLinks ? item.volumeInfo.imageLinks.thumbnail : DEFAULT_IMAGE,
      item.volumeInfo.categories ? item.volumeInfo.categories : ['N/A']
      // item.volumeInfo.categories ? item.volumeInfo.categories.map((item) => item.split("/").pop().trim()) : ['N/A'],
    )
  }

}

import { Component, OnInit } from '@angular/core';
import { GoogleBooksService } from '../../services/google-books.service';
import { MAX_RESULTS } from '../../classes/constants';
import { BookItem } from '../../classes/book-item';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-project-search',
  templateUrl: './project-search.component.html',
  styleUrls: ['./project-search.component.css']
})
export class ProjectSearchComponent implements OnInit {
  apiRoot: string = "https://www.googleapis.com/books/v1/volumes?q=";

  public _page: number = 1;

  private term: string ='';

  constructor(private books: GoogleBooksService,
      private route: ActivatedRoute,
      private router: Router) {
    this.route.params.subscribe( params => {
      if (params['term']) {
        this.doSearch(params['term']);
        this.term = params['term'];
      }
    });
   }

  onSearch(){
    this.router.navigate(['/project/search', {term: this.term}]);
   }

  doSearch(term){
    this.books.search(term);
  }

  ngOnInit() {
  }

}

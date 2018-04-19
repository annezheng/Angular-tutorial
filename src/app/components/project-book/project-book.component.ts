import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';
import { BookItem, BookDetailItem } from '../../classes/book-item';
import { LibraryDataService } from '../../services/library-data.service';
import { GoogleBooksService } from '../../services/google-books.service';

@Component({
  selector: 'app-project-book',
  templateUrl: './project-book.component.html',
  styleUrls: ['./project-book.component.css']
})
export class ProjectBookComponent implements OnInit {
  id: string;
  title: string;
  authors: string;
  description: string;
  pages: string;
  thumbnail: string;
  categories: string[];
  publisher: string;
  publishedDate: string;
  previewLink: string;

  // book: BookDetailItem;

  bookIndex: number = -1;

  addDeleteInLibrary(){
    if (this.bookIndex === -1) {
      this.addToLibrary();
    }else{
      this.deleteFromLibrary();
    }
  }

  addToLibrary(){
    let book = new BookItem(
          this.id,
          this.title,
          this.authors,
          this.thumbnail,
          this.categories[0]
        );
    this.libraryDataService.libraryBooks.unshift(book);
  }

  deleteFromLibrary(){
    this.libraryDataService.libraryBooks.splice(this.bookIndex, 1);
  }

  getBookIndexInLibrary(id){
    this.bookIndex = -1;
    for (let i = 0; i < this.libraryDataService.libraryBooks.length; i++)
    {
      let lbook = this.libraryDataService.libraryBooks[i];
      if (lbook.id === id)
      {
        this.bookIndex = i;
        break;
      }
    }
  }
  constructor(private route: ActivatedRoute,
              private http: Http,
              private books: GoogleBooksService,
              private libraryDataService: LibraryDataService) {
    this.route.params.subscribe(
      params => this.books.retrieveBook(params['id'])
      // .do(value => console.log(value))
      .subscribe( value => {
        let item = value.json();
        this.id = item.id;
        this.title = item.volumeInfo.title;
        this.authors = item.volumeInfo.authors.toString();
        this.description = item.volumeInfo.description;
        this.pages = item.volumeInfo.pageCount;
        this.thumbnail = item.volumeInfo.imageLinks.small;
        this.categories = item.volumeInfo.categories[0].split('/');
        this.publisher = item.volumeInfo.publisher;
        this.publishedDate = item.volumeInfo.publishedDate;
        this.previewLink = item.volumeInfo.previewLink;
        this.getBookIndexInLibrary(this.id);
      }));
  }

  ngOnInit() {
  }

}

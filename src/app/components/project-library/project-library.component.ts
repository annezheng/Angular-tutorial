import { Component, OnInit } from '@angular/core';
import { BookItem } from '../../classes/book-item';
import { LibraryDataService } from '../../services/library-data.service';
// import { BookDetailItem } from '../../classes/book-detail-item';

@Component({
  selector: 'app-project-library',
  templateUrl: './project-library.component.html',
  styleUrls: ['./project-library.component.css']
})
export class ProjectLibraryComponent implements OnInit {
  books: BookItem[];

  constructor(private libraryDataService: LibraryDataService) {
    this.books = this.libraryDataService.libraryBooks;
  }

  ngOnInit() {
  
  }

}

import { TestBed, inject } from '@angular/core/testing';

import { AsimLibraryService } from './asim-library.service';
import {AsimBook} from '../classes/asim-book';

function createBookFixture(book_id) {
  return new AsimBook(
    book_id,
    "title",
    "subTitle:",
    ["authors"],
    "publisher",
    "publishDate",
    "description",
    ["categories"],
    "thumbnail",
    "smallThumbnail"
  )
}

describe('AsimLibraryService', () => {
  let libraryService; 
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AsimLibraryService]
    });
    libraryService = TestBed.get(AsimLibraryService);
  });

  it('can add a book to the library', () => {
    //TODO
    let book = createBookFixture('book_1')
    libraryService.addBook(book);    
    expect(libraryService.books.length).toBe(1);
    expect(libraryService.books[0].id).toBe('book_1');
  });

  it('can remove a book to the library', () => {
    //TODO
    let book = createBookFixture('book_1')
    libraryService.addBook(book); 
    libraryService.removeBook(book);    
    expect(libraryService.books.length).toBe(0);
    
  });

  it('checks if a book is already in the library', () => {
    //TODO
    let book = createBookFixture('book_1');
    libraryService.addBook(book);      
    expect(libraryService.hasBook(book)).toBe(true);
  });

  it('can save and load the books', () => {
    //TODO
    let book = createBookFixture('book_1');
    libraryService.addBook(book);  
    libraryService.save();
    libraryService.books = [];
    libraryService.load();
    expect(libraryService.books.length).toBe(1);
  });

  
});

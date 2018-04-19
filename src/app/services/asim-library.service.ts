import { Injectable } from '@angular/core';
import {AsimBook} from '../classes/asim-book';

@Injectable()
export class AsimLibraryService {

  books: AsimBook[] = [];

  constructor() {
    this.load();
  }

  private save() {
    localStorage.setItem('books', JSON.stringify(this.books));
  }

  private load() {
    let savedBooks = localStorage.getItem('books');
    if (!savedBooks) {
      return
    }
    // console.log(savedBooks);
    savedBooks = JSON.parse(savedBooks);
    // console.log(savedBooks);
    for (let i = 0; i < savedBooks.length; i++) {
      let savedBook = savedBooks[i];
      // console.log(savedBook);
      //noinspection TypeScriptValidateTypes,TypeScriptUnresolvedFunction
      this.books.push(Object.assign(new AsimBook(null, null, null, null, null, null, null, null, null, null), savedBook));
    }
    // console.log(this.books);
  }

  addBook(book: AsimBook) {
    if (!this.hasBook(book)) {
      this.books.push(book);
      this.save();
    }
  }

  removeBook(book: AsimBook) {
    let index = this.indexOf(book);
    this.books.splice(index, 1);
    this.save();
  }

  hasBook(book: AsimBook): boolean {
    return this.indexOf(book) !== -1;
  }

  indexOf(book: AsimBook): number {
    for (let i = 0; i < this.books.length; i++) {
      if (this.books[i].id === book.id) {
        return i
      }
    }
    return -1;
  }

}

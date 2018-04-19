import { Component, OnInit, Input, Output , EventEmitter} from '@angular/core';
import { BookItem } from '../../classes/book-item';

@Component({
  selector: 'app-project-search-book',
  templateUrl: './project-search-book.component.html',
  styleUrls: ['./project-search-book.component.css']
})
export class ProjectSearchBookComponent implements OnInit {
  @Input('book') book: BookItem;
  
  constructor() { }

  ngOnInit() {
  }

}

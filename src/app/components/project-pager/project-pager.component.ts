import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';


@Component({
  selector: 'app-project-pager',
  templateUrl: './project-pager.component.html',
  styleUrls: ['./project-pager.component.css']
})
export class ProjectPagerComponent implements OnInit {
  @Input("page") page: number = 1;
  @Input("totalPages") totalPages: number = 0;
  @Output('') changePage: EventEmitter<number> = new EventEmitter<number>();

  next(){
    if (this.page < this.totalPages){  
      this.changePage.emit(this.page + 1);
    }
  }

  previous(){
    if (this.page >= 0){
      this.changePage.emit(this.page - 1);
    }
    
  }

  constructor() { }

  ngOnInit() {
  }

}

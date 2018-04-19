import { Component, OnInit } from '@angular/core';
import { SimpleService } from '../../services/simple.service';

@Component({
  selector: 'app-di-child',
  templateUrl: './di-child.component.html',
  styleUrls: ['./di-child.component.css']
})
export class DiChildComponent implements OnInit {

  constructor(private service: SimpleService) { }

  ngOnInit() {
  }

}

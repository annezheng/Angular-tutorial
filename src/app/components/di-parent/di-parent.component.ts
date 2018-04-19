import { Component, OnInit } from '@angular/core';
import { SimpleService } from '../../services/simple.service';

@Component({
  selector: 'app-di-parent',
  templateUrl: './di-parent.component.html',
  styleUrls: ['./di-parent.component.css'],
  // providers: [SimpleService] // share between itself and all children
  viewProviders: [SimpleService] // share between itself and all view children, not content children
})
export class DiParentComponent implements OnInit {

  constructor(private service: SimpleService) { }

  ngOnInit() {
  }

}

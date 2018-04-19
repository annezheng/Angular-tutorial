import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchHttpService } from '../../services/search-http.service';

@Component({
  selector: 'app-routing',
  templateUrl: './routing.component.html',
  styleUrls: ['./routing.component.css']
})
export class RoutingComponent implements OnInit {
  apiRoot: string = "http://httpbin.org";
  loading: boolean = false;

  onSearch(term: string){
    this.router.navigate(['routing', {term:term}]);
  }

  doSearch(term: string){
    this.loading = true;
    this.itunes.search(term).then(() => this.loading = false);    
  }

  canDeactivate(){
    return this.itunes.results.length > 0;
  }

  constructor(private itunes: SearchHttpService,
              private route: ActivatedRoute,
              private router: Router) { 
    this.route.params.subscribe( params => {
      if (params['term']) {
        this.doSearch(params['term']);
      }      
    });    
  }

  ngOnInit() {
  }

}

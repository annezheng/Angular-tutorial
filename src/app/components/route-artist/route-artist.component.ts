import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-route-artist',
  templateUrl: './route-artist.component.html',
  styleUrls: ['./route-artist.component.css']
})
export class RouteArtistComponent implements OnInit {
  private artist: any;

  constructor(private route: ActivatedRoute, private http: Http) { 
    // this.route.params.subscribe(params => console.log(params));
    this.route.params.subscribe(
      params => this.http.get(`https://itunes.apple.com/lookup?id=${params['artistId']}`)
      .toPromise()
      .then(res => {       
        this.artist = res.json().results[0];         
      })      
    )
  }

  ngOnInit() {
  }

}




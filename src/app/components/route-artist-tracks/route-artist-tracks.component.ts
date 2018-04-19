import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Http } from '@angular/http';

@Component({
  selector: 'app-route-artist-tracks',
  templateUrl: './route-artist-tracks.component.html',
  styleUrls: ['./route-artist-tracks.component.css']
})
export class RouteArtistTracksComponent implements OnInit {
  private tracks: any[];

  constructor(private route: ActivatedRoute, private http: Http) { 
    this.route.parent.params.subscribe(
      params => this.http.get(`https://itunes.apple.com/lookup?id=${params['artistId']}&entity=song`)
      .toPromise()
      .then(res => {
        // console.log(res.json());
        this.tracks = res.json().results.slice(1);
      })  
    
    )
  }

  ngOnInit() {
  }

}



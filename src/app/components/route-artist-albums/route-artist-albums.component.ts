import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-artist-albums',
  templateUrl: './route-artist-albums.component.html',
  styleUrls: ['./route-artist-albums.component.css']
})
export class RouteArtistAlbumsComponent implements OnInit {
  private albums: any[];

  constructor(private http: Http,
              private route: ActivatedRoute) {
    this.route.parent.params.subscribe(params => {
      this.http.get(`https://itunes.apple.com/lookup?id=${params['artistId']}&entity=album`)
          .toPromise()
          .then(res => {
            this.albums = res.json().results.slice(1);
          });
    });
  }

  ngOnInit() {
  }

}




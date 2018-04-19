import { Component, OnInit } from '@angular/core';
import { Http } from '@angular/http';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-route-artist-videos',
  templateUrl: './route-artist-videos.component.html',
  styleUrls: ['./route-artist-videos.component.css']
})
export class RouteArtistVideosComponent implements OnInit {
  private videos: any[];

  constructor(private http: Http,
              private route: ActivatedRoute) {
    this.route.parent.params.subscribe(params => {
      this.http.get(`https://itunes.apple.com/lookup?id=${params['artistId']}&entity=musicVideo`)
          .toPromise()
          .then(res => {
            console.log(res.json());
            this.videos = res.json().results.slice(1);
          });
    });
  }

  ngOnInit() {
  }

}



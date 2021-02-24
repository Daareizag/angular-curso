import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styles: [
  ]
})
export class ArtistaComponent implements OnInit {

  artista: any;
  loading: boolean;
  topTracks: any[] = [];

  constructor( private activatedRoute: ActivatedRoute,
                private spotifyService: SpotifyService ) {
      this.activatedRoute.params.subscribe( params => {
        this.getArtista(params['id']);
        this.getTopTrack(params['id']);
      });
   }

  ngOnInit(): void {
  }

  getArtista(id:string){
    this.loading = true;
    this.spotifyService.getArtista(id).subscribe( artista => {
      this.artista = artista;
      this.loading = false;
    });
  }

  getTopTrack( id: string){
    this.spotifyService.getTopTrack( id ).subscribe( topTrack => {
      console.log(topTrack);
      this.topTracks = topTrack;
    });
  }

}

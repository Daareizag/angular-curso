import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styles: [
  ]
})
export class SearchComponent implements OnInit {

  artistas: any[] =[];
  loading: boolean;
  error: boolean;
  mensaje: string;

  constructor( private spotifyService:SpotifyService) { }

  ngOnInit(): void {
  }

  obtenerArtista(term: string){
    this.loading = true;
    this.error = false;
    this.spotifyService.getArtistas(term).subscribe( (data:any) => {
      this.artistas = data;
      this.loading = false;
    },(errorServer) => {
      this.loading = false;
      this.error = true;
      this.mensaje = errorServer.error.error.message;
    });
  }

}

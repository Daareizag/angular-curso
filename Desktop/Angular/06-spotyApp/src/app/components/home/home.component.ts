import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SpotifyService } from '../../services/spotify.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: [
  ]
})
export class HomeComponent implements OnInit {

  nuevasCanciones: any[] = [];
  loading: boolean;
  error: boolean;
  mensaje: string;


  constructor( private httpClient: HttpClient,
                private spotifyService: SpotifyService) {
    this.loading = true;
    this.error = false;

    this.spotifyService.getNewRelease().subscribe( (data: any) => {
      this.nuevasCanciones = data;
      console.log(this.nuevasCanciones);
      this.loading = false;
    }, (errorService) => {
      this.loading = false;
      this.error = true;
      this.mensaje = errorService.error.error.message;
    });

  }

  ngOnInit(): void {
  }

}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';



@Injectable({
  providedIn: 'root'
})
export class SpotifyService {

  constructor( private http: HttpClient) {
    console.log('Servicio spotify.')
  }

  getQuery(query:string){
    // Se crea constante para la url
    const url = `https://api.spotify.com/v1/${query}`;
    // headers de la aplicacion
    const headers = new HttpHeaders({
      'Authorization' : 'Bearer QDAXlsxI2VzpcNh4BksdwDdVxtVSFELFDvULtjZi3PjuHtlPRb9MawRB0Lb7P9pw7eGNTk3plyav4cWFCk'
    });
    return this.http.get(url, {headers});
  }

  getNewRelease(){
    // Se llama al metodo getQuery que centraliza las peticiones
    return this.getQuery('browse/new-releases').pipe(
      map( data => data['albums'].items)
    );
  }

  getArtistas(term:string){
    return this.getQuery(`search?q=${term}&type=artist&limit=15`).pipe(
      map(data =>  data['artists'].items)
    );
  }

  getTopTrack(id:string){
    return this.getQuery(`artists/${id}/top-tracks?market=us`).pipe(
      map( data => data['tracks'])
    );
  }

  getArtista(id:string){
    return this.getQuery(`artists/${id}`);
  }
}

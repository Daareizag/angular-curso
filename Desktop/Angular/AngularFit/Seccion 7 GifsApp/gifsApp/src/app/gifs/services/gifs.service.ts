import { query } from '@angular/animations';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Gif, SerchGIFResponse, Pagination } from '../interfaces/gifs.interfaces';

@Injectable({
  providedIn: 'root'
})
export class GifsService {

  private apiKey: string ='2b47rkZmZZg8uRXBmOmiQHUPiJT19zqk';

  private _historial: string[] = [];

  public resultados: Gif[] = [];

  private urlEndPoint: string = 'http://api.giphy.com/v1/gifs'

  constructor( private http: HttpClient) {
    //Obtener informacion del localstorage
    this._historial = JSON.parse(localStorage.getItem('historial')!) || [];
    this.resultados = JSON.parse(localStorage.getItem('resultados')!) || [];
   }



  get historial(): string[]{
    return [...this._historial];
  }



  /* async */ buscarGifs( query: string){
    query = query.toLowerCase();
    //Se valida que no tenga repetidos la lista
    if( !this.historial.includes(query)){
      this._historial.unshift( query );
      this._historial = this._historial.slice(0,9);
      //Se guarda en el localstorage
      localStorage.setItem("historial", JSON.stringify(this._historial));
    }

    const params = new HttpParams()
                  .set('api_key', this.apiKey)
                  .set('limit', '10')
                  .set('q', query);

    this.http.get<SerchGIFResponse>(`${this.urlEndPoint}/search`, {params:params})
        .subscribe( (resp ) => {
          console.log(resp.data);
          this.resultados = resp.data;
          //Se almacenan las respuestas en el localstorage
          localStorage.setItem("resultados", JSON.stringify(this.resultados));
        })

    //Sentencia fetch de javascript
/*     fetch('http://api.giphy.com/v1/gifs/trending?api_key=2b47rkZmZZg8uRXBmOmiQHUPiJT19zqk&limit=20&q=grdragon ball')
      .then(  resp => {
          resp.json().then( data => {
          console.log(data)
        })
      }) */

      //Metodo async wait
/*       const resp = await fetch('http://api.giphy.com/v1/gifs/trending?api_key=2b47rkZmZZg8uRXBmOmiQHUPiJT19zqk&limit=20&q=grdragon ball')
      const data = await resp.json();
      console.log(data) */

  }
}

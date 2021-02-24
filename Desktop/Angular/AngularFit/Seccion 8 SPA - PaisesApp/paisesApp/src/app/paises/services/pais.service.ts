import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Country } from '../interfaces/paises.interface';

@Injectable({
  providedIn: 'root'
})
export class PaisService {

  private urlEndPoint ='https://restcountries.eu/rest/v2';

  constructor( private http: HttpClient ) { }

  get httpParams(){
    return new HttpParams().set('fields','name;capital;alpha2Code;flag;population')
  }

  buscarPais( termino: string):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.urlEndPoint}/name/${termino}`, {params: this.httpParams});
  }

  buscarCapital( termino: string ):Observable<Country[]>{
    return this.http.get<Country[]>(`${this.urlEndPoint}/capital/${termino}`, {params: this.httpParams});
  }

  buscarPaisXCod( id: string ): Observable<Country>{
    console.log(id);
    return this.http.get<Country>(`${this.urlEndPoint}/alpha/${id}`);
  }

  buscarPaisXRegion( region: string ): Observable<Country[]>{
    return this.http.get<Country[]>(`${this.urlEndPoint}/region/${region}`, {params: this.httpParams});
  }
}

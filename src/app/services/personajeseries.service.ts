import { Injectable } from '@angular/core';
import { Personaje } from 'src/models/personaje';
import { Serie } from 'src/models/serie';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class PersonajeseriesService {

  constructor(private _http: HttpClient) { }

  getPersonajes(): Observable<any>{
    var request = "/api/personajes";
    var url = environment.series + request;
    return this._http.get(url);
  }

  getPersonajeById(id: number): Observable<any>{
    var request = "/api/personajes/"+id;
    var url = environment.series + request;
    return this._http.get(url);
  }

  getSeries(): Observable<any>{
    var request = "/api/series";
    var url = environment.series + request;
    return this._http.get(url);
  }

  getSerieById(id: number): Observable<any>{
    var request = "/api/series/"+id;
    var url = environment.series + request;
    return this._http.get(url);
  }

  getPersonajesOfSerie(idSerie: number): Observable<any>{
    var request = "/api/Series/PersonajesSerie/"+idSerie;
    var url = environment.series + request;
    return this._http.get(url);
  }

  postPerosnaje(personaje: Personaje): Observable<any>{
    var json = JSON.stringify(personaje);
    var header = new HttpHeaders().set("Content-Type", "application/json");
    var request = "/api/personajes";
    var url = environment.series + request;
    return this._http.post(url, json, {headers: header});
  }

  putPersonaje(idPersonaje: number, idSerie: number): Observable<any>{
    var header = new HttpHeaders().set("Content-Type", "application/json");
    var request = "/api/Personajes/"+idPersonaje+"/"+idSerie;
    var url = environment.series + request;
    return this._http.put(url, {Headers: header});
  }

  deletePerosnaje(idPersonaje: number): Observable<any>{
    var request = "/api/personajes/"+idPersonaje;
    var url = environment.series + request;
    return this._http.delete(url);
  }
}

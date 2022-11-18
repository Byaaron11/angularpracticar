import { HttpClient, HttpHeaders } from "@angular/common/http";
import {Observable} from 'rxjs';
import { environment } from "src/environments/environment";
import { Injectable } from "@angular/core";
import { Hospital } from "src/models/hospital";

@Injectable({
  providedIn: 'root'
})
export class HospitalesService {

  constructor(private _http: HttpClient) { }

  getHospitales(): Observable<any>{
    var request = "webresources/hospitales";
    var url = environment.hospitales + request;
    return this._http.get(url);
  }

  getHospitalById(id: number): Observable<any>{
    var request = "webresources/hospitales/"+id;
    var url = environment.hospitales + request;
    return this._http.get(url);
  }

  createHospital(hospital: Hospital): Observable<any>{
    var json = JSON.stringify(hospital);
    var header = new HttpHeaders().set("Content-Type", "application/json");
    var request = "webresources/hospitales/post";
    var url = environment.hospitales + request;
    return this._http.post(url, json, {headers: header});
  }

  updateHospital(hospital: Hospital): Observable<any>{
    var json = JSON.stringify(hospital);
    var header = new HttpHeaders().set("Content-Type", "application/json");
    var request = "webresources/hospitales/put";
    var url = environment.hospitales + request;
    return this._http.put(url, json, {headers: header});
  }

  deleteHospital(id: number): Observable<any>{
    var request = "webresources/hospitales/delete/"+id;
    var url = environment.hospitales + request;
    return this._http.delete(url);
  }
}

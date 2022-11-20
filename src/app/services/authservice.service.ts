import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuario } from 'src/models/usuario';
import { Token } from 'src/models/token';

@Injectable({
  providedIn: 'root'
})
export class AuthserviceService {

  constructor(private _http: HttpClient) { }

  validarUsuario(user: Usuario): Observable<any>{
    var json = JSON.stringify(user);
    var header = new HttpHeaders().set("Content-Type", "application/json");
    var request = "/Auth/Login";
    var url = environment.empleadosAuth + request;
    return this._http.post(url, json, {headers: header}); //devuelve un token
  }

  //GUARDAMOS EL TOKEN EN EL LOCAL STORAGE Y LO SERIELIZAMOS, en este caso no hace falta
  setToken(token: Token){
    //Si no fuese string el token lo serializamos
    //const tokenString: string = JSON.stringify(token);
    localStorage.setItem("token", token.response)
  }

  //Para obtener el valor del token y hacer las peticiones ya iniciada la sesion
  getToken(): string | null {
    let token = localStorage.getItem("token");
    if(token != null){
      return token;
    }
    return null;
  }

  //Para guardarlo en el local
  setUser(User: string){
    localStorage.setItem("user", User);
  }

  //Para que muestre "Bienvenido, Rey"
  getUser(): string| null{
    let nombre = localStorage.getItem("user");
    if(nombre != null){
      return ", "+ nombre
    }else{
      return null;
    }
  }

  //Esto es para cerrar sesion (boton)
  deleteUser(): void{
    localStorage.clear();
  }

  loadAllEmployers(token: string | null): Observable<any>{
    var header = new HttpHeaders().set("Authorization", "bearer "+ token);
    var request = "/api/Empleados";
    var url = environment.empleadosAuth + request;
    return this._http.get(url, {headers: header});
  }

  loadSubordinados(token: string | null): Observable<any>{
    var header = new HttpHeaders().set("Authorization", "bearer "+ token);
    var request = "/api/Empleados/Subordinados";
    var url = environment.empleadosAuth + request;
    return this._http.get(url, {headers: header});
  }

  perfilEmpleado(token: string | null): Observable<any>{
    var header = new HttpHeaders().set("Authorization", "bearer "+ token);
    var request = "/api/Empleados/PerfilEmpleado";
    var url = environment.empleadosAuth + request;
    return this._http.get(url, {headers: header});
  }

  detalleEmpleado(token: string | null, idEmpleado: number): Observable<any>{
    var header = new HttpHeaders().set("Authorization", "bearer "+ token);
    var request = "/api/Empleados/" + idEmpleado;
    var url = environment.empleadosAuth + request;
    return this._http.get(url, {headers: header});
  }

  
}

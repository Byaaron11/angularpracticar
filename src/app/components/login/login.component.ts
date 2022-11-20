import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Router } from '@angular/router';
import { catchError } from 'rxjs';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { Empleado } from 'src/models/empleado';
import { Token } from 'src/models/token';
import { Usuario } from 'src/models/usuario';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public empleados!: Array<Empleado>;
  public token!: Token;
  public tokenRecived!: string|null;
  public mensaje!: string;

  @ViewChild("cajauser") cajaUser!: ElementRef;
  @ViewChild("cajapass") cajaPass!: ElementRef;

  constructor(
    private _service: AuthserviceService,
    private _router: Router
    ) {}

  iniciarSesion(): void{
    var user = this.cajaUser.nativeElement.value;
    var password = this.cajaPass.nativeElement.value;
    var usuario = new Usuario(user, password);
    this._service.validarUsuario(usuario).subscribe(res=>{
      this.token = res;
      this._service.setToken(this.token);
      this._service.setUser(user);
      this.comprobarLogin();
      this._router.navigate(['/empleados']);
    })
  }

  comprobarLogin(): void{
    if(this._service.getToken()){
      this._router.navigate(['/empleados']);   
    }else{
      this.mensaje = "Para continuar, inicie sesión"
    }
  }

  ngOnInit(): void {
    this.comprobarLogin();
  }
}

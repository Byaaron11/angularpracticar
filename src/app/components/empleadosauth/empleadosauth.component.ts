import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthserviceService } from 'src/app/services/authservice.service';
import { Empleado } from 'src/models/empleado';

@Component({
  selector: 'app-empleadosauth',
  templateUrl: './empleadosauth.component.html',
  styleUrls: ['./empleadosauth.component.css']
})
export class EmpleadosauthComponent implements OnInit {

  public usuario!: string | null;
  public token!: string | null; 

  public empleados!: Array<Empleado>;
  public subordinados!: Array<Empleado>;

  public detalleEmp!: Empleado;
  //public perfil!: Empleado;


  constructor(
    private _service: AuthserviceService,
    private _router: Router
    ) 
    {}
  
  //Mostrar un saludo de bienvenida
  mostrarUser(): void{
    this.usuario = this._service.getUser();
  }

  //Para borrar el local y volver a la pantalla de login
  cerrarSesion(): void{
    this._service.deleteUser();
    this._router.navigate(['/login']);
  }

  //Cargar la tabla azul
  cargarEmp(): void{
    this._service.loadAllEmployers(this.token).subscribe(res=>{
      this.empleados = res;
    });
  }

  //Cargar la tabla verde
  cargarSub(): void{
    this._service.loadSubordinados(this.token).subscribe(res=>{
      this.subordinados = res;
    });
  }

  //Al pulsar en detalles (tanto en empleados como subordinados)
  detalleEmpleado(id: number): void{
    this._service.detalleEmpleado(this.token, id).subscribe(res=>{
      this.detalleEmp = res;
    });
  }

  perfilUser(): void{
    this._service.perfilEmpleado(this.token).subscribe(res=>{
      this.detalleEmp = res;
    })
  }

  //Que al iniciar obtenga el token del localStorage y muetre el saludo
  ngOnInit(): void {
    this.token = this._service.getToken();
    this.mostrarUser();
  }

}

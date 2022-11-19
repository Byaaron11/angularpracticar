import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Hospital } from 'src/models/hospital';
import { HospitalesService } from 'src/app/services/hospitales.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearhospital',
  templateUrl: './crearhospital.component.html',
  styleUrls: ['./crearhospital.component.css']
})
export class CrearhospitalComponent implements OnInit {
  @ViewChild('cajaid') cajaId!: ElementRef;
  @ViewChild('cajanombre') cajaNombre!: ElementRef;
  @ViewChild('cajadireccion') cajaDirecccion!: ElementRef;
  @ViewChild('cajatelefono') cajaTelefono!: ElementRef;
  @ViewChild('cajacamas') cajaCamas!: ElementRef;

  constructor(private _service: HospitalesService, private _router: Router) { }

  crearHospital(): void{
    var num = parseInt(this.cajaId.nativeElement.value);
    var nombre = this.cajaNombre.nativeElement.value;
    var direccion = this.cajaDirecccion.nativeElement.value;
    var telefono = this.cajaTelefono.nativeElement.value;
    var camas = parseInt(this.cajaCamas.nativeElement.value);

    var newHospital = new Hospital(num, nombre, direccion, telefono, camas);
    this._service.createHospital(newHospital).subscribe(res=>{
      this._router.navigate(['/hospitales']);
    })
  }

  ngOnInit(): void {
  }

}

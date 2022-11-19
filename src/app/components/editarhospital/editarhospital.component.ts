import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Hospital } from 'src/models/hospital';
import { HospitalesService } from 'src/app/services/hospitales.service';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editarhospital',
  templateUrl: './editarhospital.component.html',
  styleUrls: ['./editarhospital.component.css'],
})
export class EditarhospitalComponent implements OnInit {
  public hospital!: Hospital;
  @ViewChild('cajaid') cajaId!: ElementRef;
  @ViewChild('cajanombre') cajaNombre!: ElementRef;
  @ViewChild('cajadireccion') cajaDirecccion!: ElementRef;
  @ViewChild('cajatelefono') cajaTelefono!: ElementRef;
  @ViewChild('cajacamas') cajaCamas!: ElementRef;

  constructor(
    private _service: HospitalesService,
    private _router: Router,
    private _activeRoute: ActivatedRoute
  ) {}

  loadHospital(): void {
    this._activeRoute.params.subscribe((params: Params) => {
      var id = parseInt(params['id']);
      if (id != null) {
        this._service.getHospitalById(id).subscribe((res) => {
          this.hospital = res;
        });
      }
    });
  }

  modificarHospital(): void{
    var nombre = this.cajaNombre.nativeElement.value;
    var direccion = this.cajaDirecccion.nativeElement.value;
    var telefono = this.cajaTelefono.nativeElement.value;
    var camas = parseInt(this.cajaCamas.nativeElement.value);

    this.hospital.nombre = nombre;
    this.hospital.direccion = direccion;
    this.hospital.telefono = telefono;
    this.hospital.camas = camas;

    this._service.updateHospital(this.hospital).subscribe(res=>{
      this._router.navigate(['/hospitales']);
    });
  }

  ngOnInit(): void {
    this.loadHospital();
  }
}

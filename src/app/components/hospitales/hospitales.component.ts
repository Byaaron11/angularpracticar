import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { HospitalesService } from 'src/app/services/hospitales.service';
import { Hospital } from 'src/models/hospital';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styleUrls: ['./hospitales.component.css']
})
export class HospitalesComponent implements OnInit {
  public hospitales!: Array<Hospital>;

  constructor(private _service: HospitalesService, private _router: Router) { }

  borrarHospital(id: number): void {
    this._service.deleteHospital(id).subscribe(res=>{
      this.loadHospitales();
    })
  }

  loadHospitales(): void{
    this._service.getHospitales().subscribe(res=> {
      this.hospitales = res;
    })
  }

  ngOnInit(): void {
    this.loadHospitales();
  }

}

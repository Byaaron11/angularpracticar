import { Component, OnInit } from '@angular/core';
import { HospitalesService } from 'src/app/services/hospitales.service';
import { Hospital } from 'src/models/hospital';

@Component({
  selector: 'app-hospitales',
  templateUrl: './hospitales.component.html',
  styleUrls: ['./hospitales.component.css']
})
export class HospitalesComponent implements OnInit {
  public hospitales!: Array<Hospital>;

  constructor(private _service: HospitalesService) { }

  ngOnInit(): void {
    this._service.getHospitales().subscribe(res=> {
      this.hospitales = res;
    })
  }

}

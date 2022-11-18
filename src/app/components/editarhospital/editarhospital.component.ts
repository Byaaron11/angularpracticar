import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { Hospital } from 'src/models/hospital';
import { HospitalesService } from 'src/app/services/hospitales.service';
import { Router, Params, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-editarhospital',
  templateUrl: './editarhospital.component.html',
  styleUrls: ['./editarhospital.component.css']
})
export class EditarhospitalComponent implements OnInit {

  public hospital!: Hospital;
  @ViewChild("cajaid") cajaId!: ElementRef;
  @ViewChild("cajanombre") cajaNombre!: ElementRef;
  @ViewChild("cajadireccion") cajaDirecccion!: ElementRef;
  @ViewChild("cajacamas") cajaCamas!: ElementRef;

  constructor(
    private _service: HospitalesService,
    private _router: Router,
    private _activeRoute: ActivatedRoute
  ) { }

  ngOnInit(): void {
    
  }

}

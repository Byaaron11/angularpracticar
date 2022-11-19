import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PersonajeseriesService } from 'src/app/services/personajeseries.service';
import { Personaje } from 'src/models/personaje';
import { Serie } from 'src/models/serie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-crearpersonaje',
  templateUrl: './crearpersonaje.component.html',
  styleUrls: ['./crearpersonaje.component.css']
})
export class CrearpersonajeComponent implements OnInit {

  public series!: Array<Serie>;

  @ViewChild('cajaimagen') cajaImagen!: ElementRef;
  @ViewChild('cajanombre') cajaNombre!: ElementRef;
  @ViewChild('selectserie') selectSerie!: ElementRef;


  constructor(private _service: PersonajeseriesService, private _router: Router) { }
  crearPersonaje(): void{
    var num = 0;
    var nombre = this.cajaNombre.nativeElement.value;
    var imagen = this.cajaImagen.nativeElement.value;
    var serie = parseInt(this.selectSerie.nativeElement.value);
    
    var newPersonaje = new Personaje(num, nombre, imagen, serie);
    this._service.postPerosnaje(newPersonaje).subscribe(res=>{
      this._router.navigate(['/personajes', serie])
    })
  }

  ngOnInit(): void {
    this._service.getSeries().subscribe(res=>{
      this.series = res
    })
  }

}

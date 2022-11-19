import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { PersonajeseriesService } from 'src/app/services/personajeseries.service';
import { Personaje } from 'src/models/personaje';
import { Serie } from 'src/models/serie';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificarpersonaje',
  templateUrl: './modificarpersonaje.component.html',
  styleUrls: ['./modificarpersonaje.component.css']
})
export class ModificarpersonajeComponent implements OnInit {

  public series!: Array<Serie>
  public personajes!: Array<Personaje>

  @ViewChild("selectpersonajes") selectPersonajes!: ElementRef;
  @ViewChild("selectseries") selectSeries!: ElementRef;

  constructor(private _service: PersonajeseriesService, private _router: Router) { }

  modificarPersonaje(): void{
    var idPersonaje = parseInt(this.selectPersonajes.nativeElement.value);
    var idSerie = parseInt(this.selectSeries.nativeElement.value);
    this._service.putPersonaje(idPersonaje, idSerie).subscribe(res=>{
      this._router.navigate(['/personajes', idSerie]);
    });
  }

  ngOnInit(): void {
    this._service.getSeries().subscribe(res=>{
      this.series = res;
    });
    this._service.getPersonajes().subscribe(res=>{
      this.personajes = res;
    });
  }

}

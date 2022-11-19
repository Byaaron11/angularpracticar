import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PersonajeseriesService } from 'src/app/services/personajeseries.service';
import { Personaje } from 'src/models/personaje';

@Component({
  selector: 'app-personajes',
  templateUrl: './personajes.component.html',
  styleUrls: ['./personajes.component.css']
})
export class PersonajesComponent implements OnInit {
  public personajes!: Array<Personaje>
  constructor(private _service: PersonajeseriesService, private _activeRouter: ActivatedRoute) { }

  eliminarPersonaje(id: number): void{
    this._service.deletePerosnaje(id).subscribe(res=>{
      this.loadPersonajes();
    })
  }

  loadPersonajes(): void{
    this._activeRouter.params.subscribe((params: Params)=>{
      if(params['id'] != null){
        this._service.getPersonajesOfSerie(params['id']).subscribe(res=>{
          this.personajes = res;
        });
      }
    });
  }

  ngOnInit(): void {
    this.loadPersonajes();
  }

}

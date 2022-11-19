import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { PersonajeseriesService } from 'src/app/services/personajeseries.service';
import { Serie } from 'src/models/serie';

@Component({
  selector: 'app-detalleserie',
  templateUrl: './detalleserie.component.html',
  styleUrls: ['./detalleserie.component.css']
})
export class DetalleserieComponent implements OnInit {
  public serie!: Serie;
  constructor(private _service: PersonajeseriesService, private _activeRouter: ActivatedRoute) { }

  ngOnInit(): void {
    this._activeRouter.params.subscribe((params: Params)=>{
      if(params['id'] != null){
        this._service.getSerieById(params['id']).subscribe(res=>{
          this.serie = res;
        });
      }
    });
    
  }

}

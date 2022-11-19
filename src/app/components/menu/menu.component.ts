import { Component, OnInit } from '@angular/core';
import { Serie } from 'src/models/serie';
import { PersonajeseriesService } from 'src/app/services/personajeseries.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {
  public series!: Array<Serie>;
  constructor(private _service: PersonajeseriesService) { }

  ngOnInit(): void {
    this._service.getSeries().subscribe(res=>{
      this.series = res;
    })
  }

}

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CrearhospitalComponent } from './components/crearhospital/crearhospital.component';
import { CrearpersonajeComponent } from './components/crearpersonaje/crearpersonaje.component';
import { DetalleserieComponent } from './components/detalleserie/detalleserie.component';
import { EditarhospitalComponent } from './components/editarhospital/editarhospital.component';
import { HomeComponent } from './components/home/home.component';
import { HospitalesComponent } from './components/hospitales/hospitales.component';
import { ModificarpersonajeComponent } from './components/modificarpersonaje/modificarpersonaje.component';
import { PersonajesComponent } from './components/personajes/personajes.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"hospitales", component: HospitalesComponent},
  {path:"editarhospital/:id", component: EditarhospitalComponent}, 
  {path:"createhospital", component: CrearhospitalComponent},
  {path:"detalleserie/:id", component: DetalleserieComponent},
  {path:"personajes/:id", component: PersonajesComponent},
  {path:"createpersonaje", component: CrearpersonajeComponent},
  {path:"modificarpersonaje", component: ModificarpersonajeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

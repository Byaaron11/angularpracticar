import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EditarhospitalComponent } from './components/editarhospital/editarhospital.component';
import { HomeComponent } from './components/home/home.component';
import { HospitalesComponent } from './components/hospitales/hospitales.component';

const routes: Routes = [
  {path:"", component: HomeComponent},
  {path:"hospitales", component: HospitalesComponent},
  {path:"editarhospital/:id", component: EditarhospitalComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

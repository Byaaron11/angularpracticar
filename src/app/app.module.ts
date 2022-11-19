import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';
import { HomeComponent } from './components/home/home.component';
import { HospitalesComponent } from './components/hospitales/hospitales.component';
import { EditarhospitalComponent } from './components/editarhospital/editarhospital.component';
import { CrearhospitalComponent } from './components/crearhospital/crearhospital.component';
import { DetalleserieComponent } from './components/detalleserie/detalleserie.component';
import { PersonajesComponent } from './components/personajes/personajes.component';
import { CrearpersonajeComponent } from './components/crearpersonaje/crearpersonaje.component';
import { ModificarpersonajeComponent } from './components/modificarpersonaje/modificarpersonaje.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    HomeComponent,
    HospitalesComponent,
    EditarhospitalComponent,
    CrearhospitalComponent,
    DetalleserieComponent,
    PersonajesComponent,
    CrearpersonajeComponent,
    ModificarpersonajeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

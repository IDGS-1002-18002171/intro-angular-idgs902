import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NamesGupos } from './utl/grupos.component';
import { IdgsComponent } from './utl/idgs/idgs.component';
import { IricComponent } from './utl/iric/iric.component';
import { MenuComponent } from './utl/menu/menu.component';
import { FormsModule } from '@angular/forms';
import { SumaComponent } from './utl/formularios/suma/suma.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DistanciaModule } from "./utl/tarea/distancia/distancia.module";
import { CalificacionAlumComponent } from './utl/calificacion-alum/calificacion-alum.component';
import { AlumnoFilterPipe } from './utl/alumno-filter.pipe';
@NgModule({
    declarations: [
        AppComponent,
        NamesGupos,
        IdgsComponent,
        IricComponent,
        MenuComponent,
        SumaComponent,
        CalificacionAlumComponent,
        AlumnoFilterPipe
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        FormsModule,
        DistanciaModule
    ]
})
export class AppModule { }

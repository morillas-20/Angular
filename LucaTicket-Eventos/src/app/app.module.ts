import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarEventoComponent } from './components/listar-evento/listar-evento.component';
import { HttpClientModule } from '@angular/common/http';

import { EventoService } from './services/eventos.service';

@NgModule({
  declarations: [
    AppComponent,
    ListarEventoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [EventoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

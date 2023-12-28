import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListarEventoComponent } from './components/listar-evento/listar-evento.component';
import { HttpClientModule } from '@angular/common/http';

import { EventoService } from './services/eventos.service';
import { AddEventoComponent } from './components/add-evento/add-evento.component';
import { FormsModule } from '@angular/forms';
import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';
import { EditarEventoComponent } from './components/editar-evento/editar-evento.component';
import { AddUsuarioComponent } from './components/add-usuario/add-usuario.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarEventoComponent,
    AddEventoComponent,
    ListarUsuariosComponent,
    EditarEventoComponent,
    AddUsuarioComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [EventoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

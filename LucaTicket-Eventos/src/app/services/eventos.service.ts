import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Eventos } from '../models/eventos.model';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class EventoService {

  //Todo lo de la clase es nuevo
  constructor(private http:HttpClient) {}

  private EventoUrl = 'http://localhost:3333/eventos';

  getEventos(): Observable<Eventos[]> {
    return this.http.get<Eventos[]>(this.EventoUrl);
  }

  //http://localhost:8080/user-portal/users/5
  public deleteEvento(evento:Eventos) {
    return this.http.delete(this.EventoUrl + "/"+ evento.eventoID);
  }

  public createEvento(evento:Eventos) {
    return this.http.post<Eventos>(this.EventoUrl, evento);
  }

  public getEventoById(id:any){
    return this.http.get(this.EventoUrl + "/" + id);
  }

  public editarEvento(id:any,evento:Eventos){
    console.log("SERVICIOS: "+JSON.stringify(evento));
    console.log("EVENTO: "+evento.descripcioncorta);
    return this.http.put<Eventos>(this.EventoUrl + "/" + evento.eventoID, JSON.stringify(evento),httpOptions);
  }
}
import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Usuarios } from '../models/usuarios.model';
import { Observable } from 'rxjs';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  //Todo lo de la clase es nuevo
  constructor(private http:HttpClient) {}

  private UsuarioUrl = 'http://localhost:5555/usuarios';

  getUsuarios(): Observable<Usuarios[]> {
    return this.http.get<Usuarios[]>(this.UsuarioUrl);
  }

  //http://localhost:8080/user-portal/users/5
  public deleteUsuario(usuario:Usuarios) {
    return this.http.delete(this.UsuarioUrl + "/"+ usuario.usuarioID);
  }

  public createUsuario(usuario:Usuarios) {
    return this.http.post<Usuarios>(this.UsuarioUrl, usuario);
  }
}
// editar-usuario.component.ts
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Usuarios } from '../../models/usuarios.model';
import { UsuariosService } from '../../services/usuarios.service';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Component({
  selector: 'app-editar-usuario',
  templateUrl: './editar-usuario.component.html',
  styleUrls: ['./editar-usuario.component.css']
})
export class EditarUsuarioComponent implements OnInit {
  id: any;
  data: any;
  usuario: Usuarios = new Usuarios();

  constructor(private route: ActivatedRoute, private usuarioService: UsuariosService, private router: Router, private http: HttpClient) {}

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getData();
  }

  getData() {
    this.usuarioService.getUsuarioById(this.id).subscribe(res => {
      this.data = res;
      this.usuario = this.data.info;
    });
  }

  editarUsuarios() {
    // Asegurémonos de que el campo de fecha tenga el formato correcto antes de enviarlo al servidor
    this.usuarioService.editarUsuarios(this.id,this.usuario).subscribe(res=>{});
    this.router.navigate(["../"]);
  }
  
 
  irUsuarios() {
    this.router.navigate(["../usuarios"]);
  }
}

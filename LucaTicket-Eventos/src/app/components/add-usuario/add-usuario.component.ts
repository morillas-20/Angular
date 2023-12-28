import { Component } from '@angular/core';
import { Usuarios } from 'src/app/models/usuarios.model';
import { UsuariosService } from 'src/app/services/usuarios.service';
import {Router} from '@angular/router';

@Component({
  selector: 'app-add-usuario',
  templateUrl: './add-usuario.component.html',
  styleUrls: ['./add-usuario.component.css']
})
export class AddUsuarioComponent {
  usuario: Usuarios = new Usuarios();

  constructor(private router: Router, private usuarioService: UsuariosService){}

  createUsuario(): void {
    console.log(this.usuario);
    this.usuarioService.createUsuario(this.usuario)
      .subscribe(data => {
        alert("Usuario generado de forma correcta.");
      });
  };

  irUsuarios(){
    this.router.navigate(["../users"])
  }
}

import { Component, OnInit  } from '@angular/core';
import { Router } from '@angular/router';
import { Usuarios } from '../../models/usuarios.model';
import { UsuariosService } from '../../services/usuarios.service';

@Component({
  selector: 'app-listar-usuarios',
  templateUrl: './listar-usuarios.component.html',
  styleUrls: ['./listar-usuarios.component.css']
})
export class ListarUsuariosComponent implements OnInit{
  public usuarios!:Usuarios[];//Inicializa 
  constructor(private router: Router, private usuarioService: UsuariosService) {}

  ngOnInit(): void {
    this.usuarioService.getUsuarios().subscribe((data:any) => {
      this.usuarios = data.info;
      console.log(data);
    });
  }
  deleteUser(usuario: Usuarios): void {
    this.usuarioService.deleteUsuario(usuario).subscribe((data) => {
      this.usuarios = this.usuarios.filter((u) => u !== usuario);
    });
  }

}

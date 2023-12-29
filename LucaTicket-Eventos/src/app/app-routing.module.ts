import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListarEventoComponent } from './components/listar-evento/listar-evento.component';
import { AddEventoComponent } from './components/add-evento/add-evento.component';
import { EditarEventoComponent } from './components/editar-evento/editar-evento.component';

import { ListarUsuariosComponent } from './components/listar-usuarios/listar-usuarios.component';
import { AddUsuarioComponent } from './components/add-usuario/add-usuario.component';
import { EditarUsuarioComponent } from './components/editar-usuario/editar-usuario.component';

const routes: Routes = [
  { 
    path: '', 
    component: ListarEventoComponent 
  },
  {
    path: 'add',
    component: AddEventoComponent
  },
  {
    path:"", component:ListarEventoComponent
  },
  {
    path:"eventos/:id", component:EditarEventoComponent
  },
  {
    path:"eventos", component:ListarEventoComponent
  },

  {
    path:"usuarios/:id", component:EditarUsuarioComponent
  },
  {
    path: 'addUser',
    component: AddUsuarioComponent
  },
  {
    path:"users", component:ListarUsuariosComponent 
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

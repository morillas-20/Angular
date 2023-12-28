import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarEventoComponent } from './components/listar-evento/listar-evento.component';
import { AddEventoComponent } from './components/add-evento/add-evento.component';

const routes: Routes = [
  { 
    path: '', 
    component: ListarEventoComponent 
  },
  {
    path: 'add',
    component: AddEventoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

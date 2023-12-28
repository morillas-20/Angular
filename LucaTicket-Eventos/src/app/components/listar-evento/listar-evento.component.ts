import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Eventos } from '../../models/eventos.model';
import { EventoService } from '../../services/eventos.service';


@Component({
  selector: 'app-listar-evento',
  templateUrl: './listar-evento.component.html',
  styleUrls: ['./listar-evento.component.css']
})
export class ListarEventoComponent implements OnInit{
  public eventos!:Eventos[];//Inicializa 

  constructor(private router: Router, private eventoService: EventoService) {}

  ngOnInit(): void {
    this.eventoService.getEventos().subscribe((data:any) => {
      this.eventos = data.info;
      console.log(data);
    });
  }

  deleteEvento(evento: Eventos): void {
    this.eventoService.deleteEvento(evento).subscribe((data) => {
      this.eventos = this.eventos.filter((u) => u !== evento);
    });
  }

  volverAdd(){
    this.router.navigate(["../add"])
  }

  irUsuarios(){
    this.router.navigate(["../users"])
  }

  editarEvento(evento: Eventos){
    this.router.navigate(["../eventos/"+evento.eventoID])
  }
}
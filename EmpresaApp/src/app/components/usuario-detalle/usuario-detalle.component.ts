import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { ActivatedRoute } from '@angular/router';
import { UsuarioEntidadModel } from 'src/app/models/usuarioEntidadModel';

@Component({
  selector: 'app-usuario-detalle',
  templateUrl: './usuario-detalle.component.html',
  styles: []
})
export class UsuarioDetalleComponent implements OnInit {
  id:string;
  usuario: UsuarioEntidadModel;

  constructor(private servicio:AuthService,
              private route:ActivatedRoute) { }

  ngOnInit() {
    this.usuario = new UsuarioEntidadModel();
    this.id = this.route.snapshot.paramMap.get('id');
    this.obtenerPorId();
  }

  obtenerPorId(){
    this.servicio.obtenerPorId(this.id).subscribe((data) => {
      if(data != undefined){
        this.usuario = data;
        console.log(data);
      }
    });
  }

}

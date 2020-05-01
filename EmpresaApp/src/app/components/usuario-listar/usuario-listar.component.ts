import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { UsuarioEntidadModel } from 'src/app/models/usuarioEntidadModel';

@Component({
  selector: 'app-usuario-listar',
  templateUrl: './usuario-listar.component.html',
  styles: []
})
export class UsuarioListarComponent implements OnInit {
  listado:UsuarioEntidadModel[];
  p: number = 1;  
  cantidadPorPagina:number = 10;
  total:number;

  constructor(private servicio:AuthService,
              private router:Router) { }

  ngOnInit() {
    this.obtenerTodos();
  }

  obtenerTodos()
  {
    this.servicio.obtenerTodos().subscribe((data) => {
      if(data.length >= 1)
      {
        this.total = data.length;
        this.listado = data;
      }
    },(error)=>{
      Swal.close();
      Swal.fire({
        title:'Error',
        text: error.error,
        allowOutsideClick: false
      });
    })
  }

  borrarUsuario(usuario:UsuarioEntidadModel)
  {debugger
    Swal.fire({
      title: 'Esta seguro?',
      text: 'Esta seguro que desea eliminar a: ' + usuario.nombre + ' ' + usuario.apellido + ' ?',
      showCancelButton:true,
      showConfirmButton: true,
      allowOutsideClick: false
    }).then(resp => {
      if(resp.value){
        this.servicio.borrarUsuario(usuario.id).subscribe(data => {
          if(data != undefined){
            Swal.fire({
              title: 'Correcto!!',
              text: 'El usuario : ' + usuario.nombre + ' ' + usuario.apellido + ' fue borrado exitosamente!!',
              showCancelButton:true,
              showConfirmButton: true,
              allowOutsideClick: false
            })
            this.servicio.obtenerTodos().subscribe((data)=>{
              if(data !== null || data !== undefined){
                this.listado = data;
              }
            },(error) => {
              Swal.fire({
                title:'Info',
                text: error.error,
                allowOutsideClick: false
              })
            })

            Swal.fire({
              title: 'Correcto',
              text: 'Usuario:  ' + usuario.nombre + ' borrado correctamente',
              allowOutsideClick: false
            });
            
          }
        },(error) => {
          
        })
      }
    })
  }

}

import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioModel } from 'src/app/models/usuarioModel';
import Swal from 'sweetalert2';
import { empresaModel } from 'src/app/models/empresaModel';
import { TipoIdentificacionService } from 'src/app/services/tipo-identificacion.service';
import { EmpresaService } from 'src/app/services/empresa.service';
import { tipoIdentificacionModel } from 'src/app/models/tipoIdentificacionModel';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styles: []
})
export class RegistroComponent implements OnInit {
  usuario:UsuarioModel = new UsuarioModel();
  listadoEmpresas: empresaModel[];
  listadoTipos: tipoIdentificacionModel[];

  constructor(private authService:AuthService, 
    private router:Router,
    private empresaService: EmpresaService,
    private tiposService: TipoIdentificacionService) { }

  ngOnInit() {
    this.obtenerEmpresas();
    this.obtenerTiposIdentificacion();
  }
  onSubmit(formulario:NgForm){
    if(formulario.valid){
      Swal.fire({title:'',text:'espere por favor...',
                allowOutsideClick:false});
      Swal.showLoading();

      this.authService.CrearUsuario(this.usuario).subscribe(data => {
        console.log(data);
        Swal.close();
        this.router.navigateByUrl('/usuarioListar');
      },(error) => {
        Swal.close();
        Swal.fire({title:'Error al crear usuario',text:error.error,
                allowOutsideClick:false});
        console.log(error.error);
      })
    }    
  }

  obtenerEmpresas()
  {
    this.empresaService.obtenerTodos().subscribe((data) => {
      if(data.length >= 1){
        this.listadoEmpresas = data;
      }
    });
  }

  obtenerTiposIdentificacion()
  {
    this.tiposService.obtenerTodos().subscribe((data) => {
      if(data.length >= 1){
        this.listadoTipos = data;
      }
    });

  }

}

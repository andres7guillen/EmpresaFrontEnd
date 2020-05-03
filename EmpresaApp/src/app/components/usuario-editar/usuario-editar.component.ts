import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuarioModel';
import { empresaModel } from 'src/app/models/empresaModel';
import { tipoIdentificacionModel } from 'src/app/models/tipoIdentificacionModel';
import { AuthService } from 'src/app/services/auth.service';
import { Router, ActivatedRoute } from '@angular/router';
import { EmpresaService } from 'src/app/services/empresa.service';
import { TipoIdentificacionService } from 'src/app/services/tipo-identificacion.service';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-usuario-editar',
  templateUrl: './usuario-editar.component.html',
  styles: []
})
export class UsuarioEditarComponent implements OnInit {
  id:string;
  usuario:UsuarioModel = new UsuarioModel();
  listadoEmpresas: empresaModel[];
  listadoTipos: tipoIdentificacionModel[];

  constructor(private authService:AuthService, 
    private route:ActivatedRoute,
    private router:Router,
    private empresaService: EmpresaService,
    private tiposService: TipoIdentificacionService) { }

  ngOnInit() {
    this.obtenerEmpresas();
    this.obtenerTiposIdentificacion();
    this.id = this.route.snapshot.paramMap.get('id');
    this.obtenerPorId();
  }

  obtenerEmpresas()
  {
    this.empresaService.obtenerTodos().subscribe((data) => {
      if(data.length >= 1){
        this.listadoEmpresas = data;
      }
    });
  }

  onSubmit(formulario:NgForm){debugger
    if(formulario.valid){
      this.usuario.email = this.usuario.correoElectronico;
      Swal.fire({title:'',text:'espere por favor...',
                allowOutsideClick:false});
      Swal.showLoading();

      this.authService.editarUsuario(this.usuario).subscribe(data => {
        console.log(data);
        Swal.close();
        this.router.navigateByUrl('/usuarioListar');
      },(error) => {
        Swal.close();
        Swal.fire({title:'Error al editar usuario',text:error.error,
                allowOutsideClick:false});
        console.log(error.error);
      })
    }    
  }



  obtenerTiposIdentificacion()
  {
    this.tiposService.obtenerTodos().subscribe((data) => {
      if(data.length >= 1){
        this.listadoTipos = data;
      }
    });

  }

  obtenerPorId(){
    this.authService.obtenerPorId(this.id).subscribe((data) => {
      if(data != undefined){
        this.usuario = data;
      }
    });
  }



}

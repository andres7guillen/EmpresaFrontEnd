import { Component, OnInit } from '@angular/core';
import { empresaModel } from 'src/app/models/empresaModel';
import { EmpresaService } from 'src/app/services/empresa.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { empresaEntidadModel } from 'src/app/models/empresaEntidadModel';

@Component({
  selector: 'app-empresa-listar',
  templateUrl: './empresa-listar.component.html',
  styles: []
})
export class EmpresaListarComponent implements OnInit {
  listado:empresaEntidadModel[];
  p: number = 1;  
  cantidadPorPagina:number = 10;
  total:number;

  constructor(private servicio:EmpresaService,
    private router:Router) { }

  ngOnInit() {
    this.obtenerTodos();
  }

  obtenerTodos(){debugger
    this.servicio.obtenerTodos().subscribe((data) => {
      if(data.length >= 1)
      {
        this.listado = data
      }
    },(error)=>{
      Swal.close();
      Swal.fire({        
        title:'Error',
        text: error.error,
        allowOutsideClick: false
      });
    });
  }

  borrarEmpresa(empresa:empresaModel)
  {

    Swal.fire({
      title: 'Esta seguro?',
      text: 'Esta seguro que desea eliminar la empresa: ' + empresa.razonSocial + '  ?',
      showCancelButton:true,
      showConfirmButton: true,
      allowOutsideClick: false
    }).then(resp => {
      if(resp.value){
        Swal.fire({title:'',text:'espere por favor...',
                allowOutsideClick:false});
      Swal.showLoading();
        this.servicio.eliminar(empresa.id).subscribe(data => {debugger
          Swal.close();
          this.obtenerTodos();         
        },(error) => {
          
        })
      }
    })
  }

}

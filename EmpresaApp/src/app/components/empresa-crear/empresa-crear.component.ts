import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EmpresaService } from 'src/app/services/empresa.service';
import { Router } from '@angular/router';
import { empresaModel } from 'src/app/models/empresaModel';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-empresa-crear',
  templateUrl: './empresa-crear.component.html',
  styles: []
})
export class EmpresaCrearComponent implements OnInit {
  empresa:empresaModel = new empresaModel();

  constructor(private router:Router,private servicio:EmpresaService) { }

  ngOnInit() {
  }

  onSubmit(formulario:NgForm){
    if(formulario.valid){
      Swal.fire({title:'',text:'espere por favor...',
                allowOutsideClick:false});
      Swal.showLoading();

      this.servicio.crear(this.empresa).subscribe(data => {
        console.log(data);
        Swal.close();
        this.router.navigateByUrl('/empresaListar');
      },(error) => {
        Swal.close();
        Swal.fire({title:'Error al crear la empresa',text:error.error,
                allowOutsideClick:false});
        console.log(error.error);
      })
    }    
  }

}

import { Component, OnInit } from '@angular/core';
import { empresaModel } from 'src/app/models/empresaModel';
import { ActivatedRoute } from '@angular/router';
import { EmpresaService } from 'src/app/services/empresa.service';
import { empresaEntidadModel } from 'src/app/models/empresaEntidadModel';

@Component({
  selector: 'app-empresa-detalle',
  templateUrl: './empresa-detalle.component.html',
  styles: []
})

export class EmpresaDetalleComponent implements OnInit {
  empresa:empresaEntidadModel = new empresaEntidadModel();
  id:string;

  constructor(private route:ActivatedRoute,
              private servicio:EmpresaService) { }

  ngOnInit() {
    this.empresa = new empresaEntidadModel();
    this.id = this.route.snapshot.paramMap.get('id');
    this.obtenerPorId();
  }

  obtenerPorId()
  {
    this.servicio.obtenerPorId(this.id).subscribe((data) => {
      if(data != null)
      {
        this.empresa = data;
      }
    })
  }

}

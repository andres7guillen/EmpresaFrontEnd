import { Component, OnInit } from '@angular/core';
import { UsuarioModel } from 'src/app/models/usuarioModel';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styles: []
})
export class LoginComponent implements OnInit {
  usuario:UsuarioModel = new UsuarioModel();
  

  constructor(private auth:AuthService, private router:Router) { }

  ngOnInit() {
    this.usuario.email = 'andres7guillen@gmail.com';
    this.usuario.password = 'Y0k0gawA_1992';
  }

  onLogin(formulario:NgForm){
    if(formulario.valid){
      Swal.fire({title:'info',text:'espere por favor...',
                allowOutsideClick:false
    });
      Swal.showLoading();
      
      this.auth.Login(this.usuario).subscribe(data => {
        Swal.close();
        console.log(data);
        this.router.navigateByUrl('/home');
      },(error) => {
        Swal.close();
        Swal.fire({title:'Error al autenticar',text:error.error });

        console.log(error.error);
      })
    }
  }

}

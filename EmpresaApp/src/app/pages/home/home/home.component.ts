import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styles: []
})
export class HomeComponent implements OnInit {

  constructor(private auth:AuthService,
    private router:Router) { }
    estaLogueado:boolean;

  ngOnInit() {
    //this.estaLogueado = this.auth.estaAutenticado();
  }

  salir(){
    //this.auth.LogOut();
    this.router.navigateByUrl('/login');
  }

}

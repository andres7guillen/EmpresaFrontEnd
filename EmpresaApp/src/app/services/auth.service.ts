import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { UsuarioModel } from '../models/usuarioModel';
import { UsuarioRolModel } from '../models/usuarioRolModel';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  userToken: string = '';   
  private urlUsuario:string = 'https://localhost:44366/api/Usuario/';
  localhost:44366
  private headers = new HttpHeaders({
    'Content-type': 'application/json',
    "Authorization": "Bearer " + localStorage.getItem('token').toString()   
});

  constructor(private http:HttpClient) { }

  Login(usuario:UsuarioModel) {
    return this.http.post(this.urlUsuario + 'Login', JSON.stringify(usuario),{headers: this.headers})
    .pipe(
      map(resp => {
        this.guardarToken(resp['token']);
        return resp;
      })
    )
  }
   
  LogOut(){
    localStorage.removeItem('token');
  }

  private guardarToken(token:string){
    this.userToken = token;
    localStorage.setItem('token',token);
  }

  leerToken():string{
    if(localStorage.getItem('token')){
      this.userToken = localStorage.getItem('token');
    }else{
      this.userToken = '';
    }
    return this.userToken;
  }

  estaAutenticado():boolean {
    return this.userToken.length > 2;
  }

  asociarUsuarioRol(usuRol:UsuarioRolModel){
    return this.http.post(this.urlUsuario + 'AsignarRolUsuario', JSON.stringify(usuRol),{headers: this.headers});
  }

  removerUsuarioRol(usuRol:UsuarioRolModel){
    return this.http.post(this.urlUsuario + 'RemoverRolUsuario', JSON.stringify(usuRol),{headers:this.headers});
  }

  CrearUsuario(usuario:UsuarioModel) {
    return this.http.post(this.urlUsuario + 'Crear', JSON.stringify(usuario),{headers: this.headers})
    .pipe(
      map(resp => {
        this.guardarToken(resp['token']);
        return resp;
      })
    )
  }

  borrarUsuario(id:string):Observable<any>
  {
    return this.http.delete(this.urlUsuario + 'eliminar?id=' + id,{headers:this.headers});
  }
  
  obtenerTodos():Observable<any>
  {
    return this.http.get(this.urlUsuario + 'obtenerTodos',{headers: this.headers, responseType: 'json'});    
  }

  obtenerPorId(id: string):Observable<any>{
    return this.http.get(this.urlUsuario + 'obtenerPorId?id=' + id)
  }

}

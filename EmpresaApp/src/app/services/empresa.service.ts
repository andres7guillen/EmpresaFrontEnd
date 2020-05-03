import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { empresaModel } from '../models/empresaModel';

@Injectable({
  providedIn: 'root'
})
export class EmpresaService {
  constructor(private http:HttpClient) { }

  private url: string = 'https://localhost:44366/api/Empresa/';
  private headers = new HttpHeaders({
    'Content-type': 'application/json',
    "Authorization": "Bearer " + localStorage.getItem('token').toString()  
  });

  crear(empresa : empresaModel)
  {
      return this.http.post(this.url + 'crear',JSON.stringify(empresa) ,{headers: this.headers})
  }

  obtenerTodos():Observable<any>
  {
    return this.http.get(this.url + 'obtenerTodos',{headers:this.headers})
  }

  obtenerPorId(id:string):Observable<any>
  {
    return this.http.get(this.url + 'obtenerPorId?id=' + id,{headers:this.headers});
  }

  eliminar(id:string):Observable<any>
  {
    return this.http.delete(this.url + 'eliminar?id=' + id,{headers:this.headers})
  }



}

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TipoIdentificacionService {
  private headers = new HttpHeaders({
    'Content-type': 'application/json' 
});

  private url: string = 'https://localhost:44366/api/TipoIdentificacion/';
  constructor(private http:HttpClient) { }
  obtenerTodos():Observable<any>
  {
    return this.http.get(this.url + 'obtenerTodos',{headers: this.headers})
  }

}

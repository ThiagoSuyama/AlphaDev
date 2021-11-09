import { IPedido } from './../model/Pedido';
import { Observable } from 'rxjs';
import { environment } from './../../environments/environment.prod';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class RecebidosService {

  constructor(private http: HttpClient) { }

  receberPedido(numeroPedido:string ,body?:IPedido[]): Observable<IPedido>{
    return this.http.post<IPedido>(`${API}/receber/${numeroPedido}`, body)
  };

}
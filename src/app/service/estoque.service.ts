import { IPedido } from './../model/Pedido';
import { IProduto } from './../model/Produto';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class EstoqueService {

  constructor(private http: HttpClient) { }

  buscarEstoque(): Observable<Array<IProduto>>{
    return this.http.get<[IProduto]>(`${API}/estoque`,)
  }

  saidaEstoque(item: string, produto:IPedido): Observable<IPedido>{
    return this.http.post<IPedido>(`${API}/estoque/${item}`, produto)
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Iproduto } from '../model/Produto'

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(
    private http: HttpClient

  ) { }

  cadastrar(produto: Iproduto): Observable<Iproduto>{
    return this.http.post<Iproduto>('http://localhost:8080/produto', produto)
  }
  
}

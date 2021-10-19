import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IProduto } from '../model/Produto'

@Injectable({
  providedIn: 'root'
})
export class ProdutoService {

  constructor(
    private http: HttpClient

  ) { }

  cadastrar(produto: IProduto): Observable<IProduto>{
    return this.http.post<IProduto>('http://localhost:8080/produto', produto)
  }
  
}

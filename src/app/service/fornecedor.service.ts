import { environment } from './../../environments/environment.prod';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFornecedor } from '../model/Fornecedor'

const API = environment.apiURL;

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  constructor(
    private http: HttpClient
  ) { }


  cadastrar(fornecedor: IFornecedor): Observable<IFornecedor>{
    return this.http.post<IFornecedor>(`${API}/fornecedor`, fornecedor)
  }
  buscarTodosFornecedor(): Observable<[IFornecedor]>{
    return this.http.get<[IFornecedor]>(`${API}/fornecedor`,)
  }
  
}

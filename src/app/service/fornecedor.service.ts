import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { IFornecedor } from '../model/Fornecedor'

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  constructor(
    private http: HttpClient
  ) { }


  cadastrar(fornecedor: IFornecedor): Observable<IFornecedor>{
    return this.http.post<IFornecedor>('http://localhost:8080/fornecedor', fornecedor)
  }
  
}

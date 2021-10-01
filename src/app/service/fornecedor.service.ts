import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ifornecedor } from '../model/Fornecedor'

@Injectable({
  providedIn: 'root'
})
export class FornecedorService {

  constructor(
    private http: HttpClient
  ) { }


  cadastrar(fornecedor: Ifornecedor): Observable<Ifornecedor>{
    return this.http.post<Ifornecedor>('http://localhost:8080/fornecedor', fornecedor)
  }
  
}

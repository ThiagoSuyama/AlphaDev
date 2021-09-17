import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/User';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(
    private http: HttpClient
  ) { }

  entrar(userLogin: string): Observable<User>{
    return this.http.get<User>(`http://localhost:3000/usuario/${userLogin}`)
  }

  cadastrar(user: User): Observable<User>{
    return this.http.post<User>('http://localhost:3000/usuario', user)
  }

  

}

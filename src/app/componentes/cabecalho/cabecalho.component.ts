import { Router } from '@angular/router';
import { AuthService } from './../../service/auth.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent  {
  user$ = this.auth.retornaUsuario()

  constructor(
    private auth: AuthService,
    private router:Router
    ) { }

    logout(){
      this.auth.logout();
      this.router.navigate(['']);
    }

}

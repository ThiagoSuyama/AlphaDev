import { AuthService } from './../../service/auth.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cabecalho',
  templateUrl: './cabecalho.component.html',
  styleUrls: ['./cabecalho.component.css']
})
export class CabecalhoComponent implements OnInit {
  // user$ = this.auth.entrar('thiago')
  constructor(
    private auth: AuthService,
    ) { }

  ngOnInit(): void {
  }

}

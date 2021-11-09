import { ToastrService } from 'ngx-toastr';
import { User } from './../model/User';
import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-entrar',
  templateUrl: './entrar.component.html',
  styleUrls: ['./entrar.component.css']
})
export class EntrarComponent implements OnInit {

  userLogin: User = new User()

  constructor(
    private auth: AuthService,
    private router: Router,
    private alert : ToastrService,

  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar(){
    this.auth.entrar(this.userLogin.usuario as string, this.userLogin.senha as string).subscribe((resp: any)=>{
      this.router.navigate(['/home'])
      this.alert.success('Bem Vindo','Sucesso')
    }, erro =>{
      console.warn('erro',erro)
      this.alert.error('Usuário ou senha estão incorretos!','Falha')

    })

  }

}

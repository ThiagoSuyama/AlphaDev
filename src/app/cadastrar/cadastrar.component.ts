import { User } from '../model/User';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../service/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  user: User = new User
  confirmarSenha: string
  

  constructor(
    private authService: AuthService,
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
    
  }

  confirmeSenha(event: any) {
    this.confirmarSenha = event.target.value

  }

  
  cadastrar() {
    

    if(this.user.senha != this.confirmarSenha) {
      alert('As senhas estão incorretas.')
    } else {
      this.authService.cadastrar(this.user).subscribe((resp: User) => {
        this.user = resp
        this.router.navigate(['/entrar'])
        alert('Usuário cadastrado com sucesso!')
      })

    }

  }

}

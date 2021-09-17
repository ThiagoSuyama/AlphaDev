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
    private router: Router
  ) { }

  ngOnInit() {
    window.scroll(0,0)
  }

  entrar(){
    
    this.auth.entrar(this.userLogin.usuario).subscribe((resp: User)=>{
      console.log(resp)
      this.userLogin = resp
      this.router.navigate(['/home'])
    }, erro =>{
      if(erro.status == 500){
        alert('Usuário ou senha estão incorretos!')
      }

    })

  }

}

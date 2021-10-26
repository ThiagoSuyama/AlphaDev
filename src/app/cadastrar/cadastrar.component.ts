import { ToastrService } from 'ngx-toastr';
import { IUser } from '../model/User';
import { Component, OnInit } from '@angular/core';
import { AuthService } from './../service/auth.service';
import { Router } from '@angular/router';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';


@Component({
  selector: 'app-cadastrar',
  templateUrl: './cadastrar.component.html',
  styleUrls: ['./cadastrar.component.css']
})
export class CadastrarComponent implements OnInit {

  // user: User = new User
  confirmarSenha: string
  formUsuario : FormGroup;
  formFields : Record<string, unknown> ={
    nome: [null],
    sobrenome:[null],
    usuario:[null],
    senha:[null],
    confirmeSenha:[null],
  }

  constructor(
    private authService: AuthService,
    private router: Router,
    private alert : ToastrService,
    private fb: FormBuilder,

  ) {
    this.formUsuario = this.fb.group(this.formFields)
   }

  ngOnInit() {
    window.scroll(0,0)
    
  }

  confirmeSenha() :boolean {
    const senha = this.formUsuario.get('senha')?.value
    const confirmeSenha = this.formUsuario.get('confirmeSenha')?.value
    if(senha === confirmeSenha){
      return true
    }
    this.alert.warning('As senhas estão incorretas.','Atenção')
    return false
  }
  
  cadastrar() {
    if(this.confirmeSenha()) {
      const body = this.formUsuario.getRawValue();
      this.authService.cadastrar(body).subscribe((resp: IUser) => {
        console.log('resp',resp)
        this.alert.success('Usuário cadastrado com sucesso!',)
        this.formUsuario.reset();
      }, error =>{
        console.warn('error', error)
        this.alert.error('Tente novamente','Falha')
      })
    }
  }

}

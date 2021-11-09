import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { IProduto } from '../model/Produto'
import { ProdutoService } from '../service/produto.service'

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {
  formProduto : FormGroup;
  formFields : Record<string, unknown> ={
    nomeProduto: [null],
    descricao:[null],
    quantidadeMinima:[null],
  }

  constructor(
    private fb: FormBuilder,
    private produtoService : ProdutoService,
    private alert : ToastrService,

  ) { 
    this.formProduto = this.fb.group(this.formFields)

  }

  ngOnInit(): void {
  }

  cadastrar(): void{
    const body:IProduto  = Object.assign({}, this.formProduto.value)
    this.produtoService.cadastrar(body).subscribe((data:IProduto)=>{
      this.formProduto.reset()
      console.log('sucesso', data)
      this.alert.success('Produto Cadastrado','Sucesso!')
    }, error =>{
      console.warn('error', error)
      this.alert.error('Tente novamente','Falha')
    })
  }

}

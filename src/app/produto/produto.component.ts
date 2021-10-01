import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Iproduto } from '../model/Produto'
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
  ) { 
    this.formProduto = this.fb.group(this.formFields)

  }

  ngOnInit(): void {
  }

  cadastrar(): void{
    const body:Iproduto  = Object.assign({}, this.formProduto.value)
    this.produtoService.cadastrar(body).subscribe((data:Iproduto)=>{
      console.log('cadastrado com sucesso', data)
    })
    console.log('body', body)
  }

}

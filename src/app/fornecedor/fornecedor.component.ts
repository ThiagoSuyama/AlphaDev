import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { Ifornecedor } from '../model/Fornecedor'
import { FornecedorService } from '../service/fornecedor.service'

@Component({
  selector: 'app-fornecedor',
  templateUrl: './fornecedor.component.html',
  styleUrls: ['./fornecedor.component.css']
})
export class FornecedorComponent implements OnInit {
  formFornecedor : FormGroup;
  formFields : Record<string, unknown> ={
    nomeFornecedor: [null],
    cnpj:[null],
    inscricaoEsdadual:[null],
    observacao:[null],

  }
  constructor(
    private fb: FormBuilder,
    private fornecedorService: FornecedorService,
  ) { 
    this.formFornecedor = this.fb.group(this.formFields)
  }

  ngOnInit(): void {
  }

  cadastrar(): void{
    const body:Ifornecedor  = Object.assign({}, this.formFornecedor.value)
    this.fornecedorService.cadastrar(body).subscribe((data:Ifornecedor)=>{
      console.log('cadastrado com sucesso', data)
    })
    console.log('body', body)
  }

}

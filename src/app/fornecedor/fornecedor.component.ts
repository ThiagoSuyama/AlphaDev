import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { IFornecedor } from '../model/Fornecedor'
import { FornecedorService } from '../service/fornecedor.service'
import { cnpj } from 'cpf-cnpj-validator';
import { ToastrService } from 'ngx-toastr';
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
    private alert : ToastrService,
  ) { 
    this.formFornecedor = this.fb.group(this.formFields)
  }

  ngOnInit(): void {
    this.validarCampoCnpj()
  }

  cadastrar(): void{
    const body:IFornecedor  = Object.assign({}, this.formFornecedor.value)
    if(!this.validarCNPJ(body.cnpj)){
      return
    }
    this.fornecedorService.cadastrar(body).subscribe((data:IFornecedor)=>{
      this.formFornecedor.reset()
      this.alert.success('Fornecedor Cadastrado','Sucesso!')
    }, error =>{
      console.warn('error', error)
      this.alert.error('Tente novamente','Falha')
    })
  }

  validarCNPJ(cnpjData:string): boolean{
    const cnpjValid = cnpj.isValid(cnpjData)
    if(!cnpjValid){
      this.alert.error('CNPJ Inválido', 'Erro')
      return false;
    }
    return true;
  }

  validarCampoCnpj(){
    this.formFornecedor.get('cnpj')?.valueChanges.subscribe(cnpj =>{
      if(cnpj.length === 14){
        this.validarCNPJ(cnpj)
        return
      }
    })
  }

}

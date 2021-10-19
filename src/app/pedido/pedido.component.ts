import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-pedido',
  templateUrl: './pedido.component.html',
  styleUrls: ['./pedido.component.css']
})
export class PedidoComponent implements OnInit {
  formPedido : FormGroup;
  formFields : Record<string, unknown> ={
    descricaoProduto: [null],
    quantidade:[null],
    fornecedor:[null],
    unidadeMedida:[null],
  }
  dropdownSettingsSigle: any = {};
  dropdownSettingsMulti: any = {};
  closeDropdownSelection=false;
  listaUnidadeMedida = [
    { id: 'L', text: 'L' },
    { id: 'ML', text: 'ML' },
    { id: 'KG', text: 'KG' },
    { id: 'MG', text: 'MG' },
    { id: 'UN', text: 'UN' },
  ]
  listaProduto!:{id:any, text:string}[]
  listaFornecedor!:{id:any, text:string}[]
  constructor(
    private fb: FormBuilder,
    private alert : ToastrService,

  ) { 
    this.formPedido = this.fb.group(this.formFields)
  }

  ngOnInit(): void {
    this.configuracaoDoCampoSelect()
    this.listaProduto=[
      {id:1, text:'arroz'},
      {id:2, text:'teste1'},
      {id:3, text:'teset2'},
    ]
    this.listaFornecedor=[
      {id:1, text: 'camil'},
      {id:2, text: 'test1'},
      {id:3, text: 'teste3'}
    ]
  }

  cadastrar(): void{
    const body = this.formPedido.getRawValue()
    console.log('body', body)
  }

  configuracaoDoCampoSelect(){
    this.dropdownSettingsSigle = {
      singleSelection: true,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: this.closeDropdownSelection
    };
    this.dropdownSettingsMulti = {
      singleSelection: false,
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      allowSearchFilter: true,
      closeDropDownOnSelection: this.closeDropdownSelection
    };
  }
}

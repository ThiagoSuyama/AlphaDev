import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-recebidos',
  templateUrl: './recebidos.component.html',
  styleUrls: ['./recebidos.component.css']
})
export class RecebidosComponent implements OnInit {
  formRecebidos : FormGroup;
  formFields : Record<string, unknown> ={
    numeroPedido: [null],
    descricaoProduto: [null],
    quantidade:[null],
    data:[null],
    validade:[null],
  }

  dropdownSettingsSigle: any = {};
  dropdownSettingsMulti: any = {};
  closeDropdownSelection=false;

  listaProduto!:{id:any, text:string}[]
  listaPedido!:{id:any, text:string}[]

  constructor(
    private fb: FormBuilder,
    private alert : ToastrService,

  )

  { 
    this.formRecebidos = this.fb.group(this.formFields)
  }

  

  ngOnInit(): void {
    this.configuracaoDoCampoSelect()
    this.listaProduto=[
      {id:1, text:'arroz'},
      {id:2, text:'teste1'},
      {id:3, text:'teset2'},
    ]

    this.listaPedido=[
      {id:1, text:'arroz'},
      {id:2, text:'teste1'},
      {id:3, text:'teset2'},
    ]
  }

  cadastrar(): void{
    const body = this.formRecebidos.getRawValue()
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

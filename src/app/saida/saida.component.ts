import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-saida',
  templateUrl: './saida.component.html',
  styleUrls: ['./saida.component.css']
})
export class SaidaComponent implements OnInit {
  formSaida : FormGroup;
  formFields : Record<string, unknown> ={
    descricaoProduto: [null],
    quantidade:[null],
  }

  dropdownSettingsSigle: any = {};
  dropdownSettingsMulti: any = {};
  closeDropdownSelection=false;

  listaProduto!:{id:any, text:string}[]

  constructor(
    private fb: FormBuilder,
    private alert : ToastrService,

  )

  { 
    this.formSaida = this.fb.group(this.formFields)
  }

  ngOnInit(): void {
    this.configuracaoDoCampoSelect()
    this.listaProduto=[
      {id:1, text:'arroz'},
      {id:2, text:'teste1'},
      {id:3, text:'teset2'},
    ]
  }

  retirar(): void{
    const body = this.formSaida.getRawValue()
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

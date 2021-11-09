import { FornecedorService } from './../service/fornecedor.service';
import { ProdutoService } from './../service/produto.service';
import { PedidoService } from './../service/pedido.service';
import { IPedido } from './../model/Pedido';
import { DataTableItem, DataTableConfig } from './../componentes/tabela/tabela.component';
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

  data: DataTableItem[];
  configTable: DataTableConfig;
  lista :Array<any> = []
  constructor(
    private fb: FormBuilder,
    private alert : ToastrService,
    private pedidoService : PedidoService,
    private produtoService : ProdutoService,
    private fornecedorService : FornecedorService,

  ) { 
    this.formPedido = this.fb.group(this.formFields)
    this.configTable = DataTableConfig.default([
      {
        var: 'id',
        label: 'N*',
        type: 'text'
      }, 
      {
        var: 'descricaoProduto',
        label: 'Produto',
        type: 'text'
      },
      {
        var: 'fornecedor',
        label: 'Fornecedor',
        type: 'text'
      },
      {
        var: 'quantidade',
        label: 'Quantidade',
        type: 'text'
      },
      {
        var: 'unidadeMedida',
        label: 'Unidade de Medida',
        type: 'text'
      },
    ], 'id');
  }

  ngOnInit(): void {
    this.configuracaoDoCampoSelect()
    this.buscarTodosProdutos()
    this.buscarTodosFornecedor()
    // this.listaProduto=[
    //   {id:1, text:'arroz'},
    //   {id:2, text:'teste1'},
    //   {id:3, text:'teset2'},
    // ]
    // this.listaFornecedor=[
    //   {id:1, text: 'camil'},
    //   {id:2, text: 'test1'},
    //   {id:3, text: 'teste3'}
    // ]
  }

  buscarTodosProdutos(){
    this.produtoService.buscarTodosProdutos().subscribe((data)=>{
      data.forEach(produto => {
        const lista: {id:any, text:string} ={
          id: produto.id,
          text: produto.nomeProduto
        }
        this.listaProduto.push(lista);
      })
    }, error =>{
      console.warn('error', error)
      this.alert.error('Tente novamente','Falha')
    })
  }

  buscarTodosFornecedor(){
    this.fornecedorService.buscarTodosFornecedor().subscribe((data)=>{
      data.forEach(fornecedor =>{
        const lista: {id:any, text:string} ={
          id: fornecedor.id,
          text: fornecedor.nomeFornecedor
        }
        this.listaFornecedor.push(lista);
      })
    }, error =>{
      console.warn('error', error)
      this.alert.error('Tente novamente','Falha')
    })
  }
  atualizarListaTabela(){
    this.data = DataTableItem.collection(this.lista);
  }

  adicionar(): void{
    const body = this.tratarCampos()
    this.lista.push(body);
    this.lista = this.lista.map((l,i)=>({id:i+1,...l}))
    this.atualizarListaTabela()
    this.formPedido.reset();
  }

  tratarCampos() : IPedido{
    const form = this.formPedido.getRawValue();
    console.log('form', form)
    const body :IPedido ={
      descricaoProduto: form.descricaoProduto && form.descricaoProduto.length ? form.descricaoProduto[0].text :'',
      fornecedor: form.fornecedor && form.fornecedor.length ? form.fornecedor[0].text : '',
      quantidade: form.quantidade ?? 0,
      unidadeMedida: form.unidadeMedida && form.unidadeMedida.length ? form.unidadeMedida[0].text : '',
      isViewItem: false,
      isDeletable: true,
    }
    return body
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

  deletarItem(item:any){
    this.lista = this.lista.filter(e=> e.id !== item.id)
    this.atualizarListaTabela()
  }


  salvar(){
    const body = this.lista
    this.pedidoService.gerarPedido(body).subscribe((data)=>{
      console.log('data',data)
      this.formPedido.reset();
      this.alert.success('Pedido Gerado','Sucesso!')
    }, error =>{
      console.warn('error', error)
      this.alert.error('Tente novamente','Falha')
    })
  }
}

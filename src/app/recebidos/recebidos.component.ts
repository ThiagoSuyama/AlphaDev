import { RecebidosService } from './../service/recebidos.service';
import { IPedido } from './../model/Pedido';
import { PedidoService } from './../service/pedido.service';
import { DataTableConfig, DataTableItem } from './../componentes/tabela/tabela.component';
import { ToastrService } from 'ngx-toastr';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-recebidos',
  templateUrl: './recebidos.component.html',
  styleUrls: ['./recebidos.component.css']
})
export class RecebidosComponent implements OnInit {

  listaDePedidos: DataTableConfig;
  dadosDoPedido: DataTableItem[];

  listaDeProdutos: DataTableConfig;
  dadosDosItens: DataTableItem[];

  numeroPedido = '';
  item :IPedido[];

  constructor(
    private alert: ToastrService,
    private pedidoService: PedidoService,
    private recebidoService: RecebidosService,

  ) {

    this.listaDePedidos = DataTableConfig.default([
      {
        var: 'id',
        label: 'N* do Pedido',
        type: 'text'
      },
      {
        var: 'fornecedor',
        label: 'Fornecedor',
        type: 'text'
      }
    ], 'id');

    this.listaDeProdutos = DataTableConfig.default([
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
      {
        var: 'DataDeValidade',
        label: 'Data de Validade',
        type: 'datePicker'
      },
      {
        var: 'quantidadeRecebida',
        label: 'Quantidade Recebida',
        type: 'input'
      },
      
      
    ], 'id');
    this.listaDeProdutos.isEditable = true;
    this.listaDeProdutos.isDeletable = false;
  }



  ngOnInit(): void {

    this.buscarTodosPedidos();

    const listaTeste = [
      {
        id: 1,
        fornecedor: 'Atacadão',
        isViewItem: true,
      },
      {
        id: 2,
        fornecedor: 'Mercado',
        isViewItem: true,

      },
      {
        id: 3,
        fornecedor: 'Loja 1',
        isViewItem: true,

      },
      {
        id: 4,
        fornecedor: 'Mergado 2',
        isViewItem: true,

      },
    ]
    this.dadosDoPedido = DataTableItem.collection(listaTeste)
  }


  buscarTodosPedidos(){
    this.pedidoService.buscarTodosPedido().subscribe((data)=>{
      if(Array.isArray(data) && data.length){
        this.dadosDoPedido = DataTableItem.collection(data)
      }
    }, error =>{
      console.warn('error', error)
      this.alert.error('Tente novamente','Falha')
    })
  }

  visualizarPedido(pedido: any) {
    this.numeroPedido = pedido.id
    this.pedidoService.buscarUmPedido(`${this.numeroPedido}`).subscribe((data)=>{
      if(Array.isArray(data) && data.length){
        this.item = data;
        this.dadosDosItens = DataTableItem.collection(data)
      }
    }, error =>{
      console.warn('error', error)
      this.alert.error('Tente novamente','Falha')
    })
    const itemTeste = [
      {
        id: 1,
        descricaoProduto: 'Arroz',
        fornecedor: 'Camil',
        quantidade: 20,
        unidadeMedida: 'KG',
        DataDeValidade: '',
        quantidadeRecebida:'',
        isConfirmItem:true,
      },
      {
        id: 2,
        descricaoProduto: 'Feijão',
        fornecedor: 'Kicaldo',
        quantidade: 20,
        unidadeMedida: 'KG',
        DataDeValidade: '',
        quantidadeRecebida:'',
        isConfirmItem:true,

      },
      {
        id: 3,
        descricaoProduto: 'Nori Alga Marinha',
        fornecedor: 'Sidchen',
        quantidade: 20,
        unidadeMedida: 'UN',
        DataDeValidade: '',
        quantidadeRecebida:'',
        isConfirmItem:true,

      },
    ]
    this.dadosDosItens = DataTableItem.collection(itemTeste)
  }

  receberPedido() {
    console.log('this.item', this.item)
    console.log('this.dadosDosItens', this.dadosDosItens)

    this.recebidoService.receberPedido(`${this.numeroPedido}`,this.item).subscribe((data)=>{
      console.log('data',data)
      this.alert.success('Pedido Recebido','Sucesso!')
      this.item =[];
      this.numeroPedido ='';
    }, error =>{
      console.warn('error', error)
      this.alert.error('Tente novamente','Falha')
    })
  }

  confirmarItem(event:Event){
    console.log('event', event)
    console.log('this.item', this.item)
    console.log('this.dadosDosItens', this.dadosDosItens)
  }
}

import { AuthGuard } from './guards/auth.guard';
import { RodapeModule } from './componentes/rodape/rodape.module';
import { CabecalhoModule } from './componentes/cabecalho/cabecalho.module';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EntrarComponent } from './entrar/entrar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { HomeComponent } from './home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { ProdutoComponent } from './produto/produto.component';
import { NgxMaskModule } from 'ngx-mask'
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { NgMultiSelectDropDownModule } from 'ng-multiselect-dropdown';
import { PedidoComponent } from './pedido/pedido.component';
import { RecebidosComponent } from './recebidos/recebidos.component';
import { SaidaComponent } from './saida/saida.component';
import { TabelaComponent } from './componentes/tabela/tabela.component';
import {MatTableModule} from '@angular/material/table';
import { EstoqueComponent } from './estoque/estoque.component';
@NgModule({
  declarations: [
    AppComponent,
    EntrarComponent,
    CadastrarComponent,
    HomeComponent,
    FornecedorComponent,
    ProdutoComponent,
    PedidoComponent,
    RecebidosComponent,
    SaidaComponent,
    TabelaComponent,
    EstoqueComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    CabecalhoModule,
    RodapeModule,
    NgxMaskModule.forRoot(),
    BrowserAnimationsModule, 
    ToastrModule.forRoot(), 
    NgMultiSelectDropDownModule.forRoot(),
    MatTableModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

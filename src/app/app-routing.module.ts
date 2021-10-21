import { PedidoComponent } from './pedido/pedido.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HomeComponent } from './home/home.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { ProdutoComponent } from './produto/produto.component';
import { RecebidosComponent } from './recebidos/recebidos.component';
import { SaidaComponent } from './saida/saida.component';

const routes: Routes = [

  {path: '', redirectTo: 'entrar', pathMatch: 'full'},

  {path: 'entrar', component: EntrarComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'home', component: HomeComponent},
  {path: 'fornecedor', component: FornecedorComponent},
  {path: 'produto', component: ProdutoComponent},
  {path: 'pedido', component: PedidoComponent},
  {path: 'recebidos', component: RecebidosComponent},
  {path: 'saida', component: SaidaComponent}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

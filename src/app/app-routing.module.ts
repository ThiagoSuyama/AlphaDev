import { EstoqueComponent } from './estoque/estoque.component';
import { LoginGuard } from './guards/login.guard';
import { AuthGuard } from './guards/auth.guard';
import { PedidoComponent } from './pedido/pedido.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, CanActivate } from '@angular/router';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { EntrarComponent } from './entrar/entrar.component';
import { HomeComponent } from './home/home.component';
import { FornecedorComponent } from './fornecedor/fornecedor.component';
import { ProdutoComponent } from './produto/produto.component';
import { RecebidosComponent } from './recebidos/recebidos.component';
import { SaidaComponent } from './saida/saida.component';

const routes: Routes = [

  {path: '', redirectTo: 'entrar', pathMatch: 'full'},

  {path: 'entrar', component: EntrarComponent,
    canActivate:[LoginGuard]
  },
  {path: 'cadastrar', component: CadastrarComponent, 
    canActivate:[AuthGuard]
  },
  {path: 'home', component: HomeComponent,
    canActivate:[AuthGuard]
  },
  {path: 'fornecedor', component: FornecedorComponent,
    canActivate:[AuthGuard]
  },
  {path: 'produto', component: ProdutoComponent,
    canActivate:[AuthGuard]
  },
  {path: 'pedido', component: PedidoComponent,
    canActivate:[AuthGuard]
  },
  {path: 'recebidos', component: RecebidosComponent, 
    canActivate:[AuthGuard]
  },
  {path: 'saida', component: SaidaComponent,
    canActivate:[AuthGuard]
  },
  {path: 'estoque', component: EstoqueComponent,
    canActivate:[AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

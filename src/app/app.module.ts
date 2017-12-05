import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/produto.component';
import { ProdutoService } from './produto.service';
import { HttpClientModule } from '@angular/common/http';
import { PaginacaoComponent } from './paginacao/paginacao.component';


@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    PaginacaoComponent
  ],
  imports: [
      BrowserModule
      ,HttpClientModule
  ],
  providers: [ProdutoService],
  bootstrap: [AppComponent]
})
export class AppModule { }

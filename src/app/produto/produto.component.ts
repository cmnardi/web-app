import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import {Paginacao} from '../paginacao';
import {Parametros} from '../parametros';

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  public opts_itens_por_pagina;
  public parametros: Parametros;
  public paginacao: Paginacao;

  constructor(
      private produtoService: ProdutoService
  ) {
    this.opts_itens_por_pagina = [5, 10, 15, 20];
    this.parametros = new Parametros();
    this.parametros.pagina = 1;
    this.parametros.itens_por_pagina = 10;
    this.paginacao = new Paginacao(this.produtoService);
  }

  ngOnInit() {
    this.lista();
  }

  listaProdutos(pagina) {
    this.parametros.pagina = pagina;
    this.lista();
  }

  altera_qt_por_pagina(itens_por_pagina) {
    this.parametros.pagina = 1;
    this.parametros.itens_por_pagina = itens_por_pagina.value;
    this.lista();
  }

  lista() {
    this.paginacao.lista(this.parametros);
  }

  buscaProdutos (busca) {
    this.parametros.q = busca.value;
    this.parametros.pagina = 1;
    this.lista();
  }
}

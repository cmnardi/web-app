import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import {Produto} from '../produto';
import {Paginacao} from '../paginacao';


export class Parametros {
  pagina: number;
  itens_por_pagina: number;
}

@Component({
  selector: 'app-produto',
  templateUrl: './produto.component.html',
  styleUrls: ['./produto.component.css']
})
export class ProdutoComponent implements OnInit {

  public produtos: Produto[];
  public opts_itens_por_pagina;
  public parametros: Parametros;
  public paginacao: Paginacao;

  constructor(
      private produtoService: ProdutoService
  ) {
    this.opts_itens_por_pagina = [2, 3, 4, 5];
    this.parametros = new Parametros();
    this.parametros.pagina = 1;
    this.parametros.itens_por_pagina = 3;
    this.paginacao = new Paginacao();
  }

  ngOnInit() {
    this.lista();
  }

  listaProdutos(pagina) {
    this.parametros.pagina = pagina;
    this.lista();
  }

  listaProdutosP(itens_por_pagina) {
    this.parametros.pagina = 1;
    this.parametros.itens_por_pagina = itens_por_pagina.value;
    this.lista();
  }

  lista() {
    this.produtoService.get(this.parametros).subscribe((r) => {
      this.produtos = r['data'];
      this.paginacao.pagina_atual = r['current_page'];
      this.paginacao.ultima_pagina = r['last_page'];
      this.paginacao.total = r['total'];
      this.paginacao.de_item = r['from'];
      this.paginacao.ate_item = r['to'];
      this.paginacao.total = r['total'];

    }, (f) => {
      console.error(f);
    });
  }

    lista2(service, p, itens) {
        const param = new Parametros();
        param.pagina = p;
        param.itens_por_pagina = 2;
        service.get(param).subscribe((r) => {
            itens = r['data'];
            this.paginacao.pagina_atual = r['current_page'];
            this.paginacao.ultima_pagina = r['last_page'];
            this.paginacao.total = r['total'];
            this.paginacao.de_item = r['from'];
            this.paginacao.ate_item = r['to'];
            this.paginacao.total = r['total'];

        }, (f) => {
            console.error(f);
        });
    }
}

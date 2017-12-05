import { Component, OnInit } from '@angular/core';
import { ProdutoService } from '../produto.service';
import {Produto} from '../produto';


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
  public pagina_atual: number;
  public ultima_pagina: number;
  public opts_itens_por_pagina;
  public parametros:Parametros;

  constructor(
      private produtoService: ProdutoService
  ) {
    this.opts_itens_por_pagina = [2, 3, 4, 5];
    this.parametros = new Parametros();
    this.parametros.pagina = 1;
    this.parametros.itens_por_pagina = 3;
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
      this.pagina_atual = r['current_page'];
      this.ultima_pagina = r['last_page'];
    }, (f) => {
      console.error(f);
    });
  }
}

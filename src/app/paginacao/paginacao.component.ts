import { Component, OnInit, Input } from '@angular/core';
import {Paginacao} from '../paginacao';
import {Parametros} from '../parametros';

@Component({
  selector: 'app-paginacao',
  templateUrl: './paginacao.component.html',
  styleUrls: ['./paginacao.component.css']
})
export class PaginacaoComponent implements OnInit {

  @Input() public paginacao: Paginacao;
  @Input() public parametros: Parametros;
  @Input() public opts_itens_por_pagina: number[];

  constructor() {
  }

  ngOnInit() {
  }

  muda_pagina(n) {
      this.parametros.pagina = n;
      this.paginacao.lista(this.parametros);
  }

}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ProdutoService {

  private url = 'http://localhost:8000/api/v1/produto';

  constructor(
      private http: HttpClient
  ) {

  }

    get(params)  {
        let get : string;
        get = 'page='+params.pagina;
        if (params.itens_por_pagina) {
            get += '&itens_per_page='+params.itens_por_pagina;
        }
        if ( params.q ){
            get += '&q='+params.q;
        }
        return this.http.get(
            this.url+'?'+get
        );
    }
}

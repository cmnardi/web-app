import {Parametros} from './parametros';

export class Paginacao {
    total: number;
    itens_por_pagina: number;
    pagina_atual: number;
    ultima_pagina: number;
    de_item: number;
    ate_item: number;
    paginas: number[];
    itens: any;

    constructor (
        private service
    ) {

    }

    set set_ultima_pagina(n: number){
        this.paginas = new Array<number>();
        this.ultima_pagina = n;
        for (let i = 1; i <= n; i++) {
            this.paginas.push(i);
        }
    }

    get pagina_anterior(): number {
        return (this.pagina_atual <= 1) ? 1 : (this.pagina_atual - 1);
    }

    get proxima_pagina(): number {
        return (this.pagina_atual >= this.ultima_pagina) ? this.ultima_pagina : (this.pagina_atual+1);
    }

    /**
     * é primeira página?
     * @returns {boolean}
     */
    get e_primeira_pagina(): boolean {
        return this.pagina_atual == 1;
    }

    get e_ultima_pagina(): boolean {
        return this.pagina_atual == this.ultima_pagina;
    }

    lista(parametros: Parametros) {
        this.service.get(parametros).subscribe((r) => {
            this.itens = r['data'];
            this.pagina_atual = r['current_page'];
            this.set_ultima_pagina = r['last_page'];
            this.total = r['total'];
            this.de_item = r['from'];
            this.ate_item = r['to'];
            this.total = r['total'];
        }, (f) => {
            console.error(f);
        });
    }
}
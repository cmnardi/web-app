export class Paginacao {
    total: number;
    itens_por_pagina: number;
    pagina_atual: number;
    ultima_pagina: number;
    de_item: number;
    ate_item: number;
    paginas: number[];

    set set_ultima_pagina(n: number){
        this.paginas = new Array<number>();
        this.ultima_pagina = n;
        for (let i = 1; i <= n; i++) {
            this.paginas.push(i);
        }
    }

    get pagina_anterior() {
        return (this.pagina_atual <= 1) ? 1 : (this.pagina_atual - 1);
    }

    get proxima_pagina() {
        return (this.pagina_atual >= this.ultima_pagina) ? this.ultima_pagina : (this.pagina_atual+1);
    }
}
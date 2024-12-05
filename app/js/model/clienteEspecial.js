class ClienteEspecial extends Cliente {
    constructor(nome, cpf, conta) {
        super(nome, cpf, conta);
        this._dependentes = [];
    }

    get dependentes() {
        return this._dependentes;
    }

    adicionarDependente(dependente) {
        if (dependente instanceof Cliente) {
            this._dependentes.push(dependente);
        } else {
            console.error("Não pode adicionar o dependente.");
        }
    }
}

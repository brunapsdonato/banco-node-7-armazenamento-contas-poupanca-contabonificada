class Clientes {
    constructor() {
        this._clientes = [];
    }

    inserir(cliente) {
        this._clientes.push(cliente);
    }

    remover(cpf) {
        this._clientes = this._clientes.filter(cliente => cliente.cpf !== cpf);
    }

    listar() {
        return this._clientes;
    }

    pesquisar(cpf) {
        return this._clientes.find(cliente => cliente.cpf === cpf);
    }
}

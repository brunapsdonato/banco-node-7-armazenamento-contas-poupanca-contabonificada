class Cliente {
    constructor(nome, cpf, conta) {
        this._nome = nome;
        this._cpf = cpf;
        this._conta = conta;
    }
    get nome() {
        return this._nome;
    }
    set nome(novoNome){
        this._nome = nome;
    }
    get cpf(){
        return this._cpf;
    }
    set cpf(novoCpf) {
        this._cpf = cpf;
    }
    get conta() {
        return this._conta;
    }
    set conta(novaConta) {
        this._conta = conta;
    }
}
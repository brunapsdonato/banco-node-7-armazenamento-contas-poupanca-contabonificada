class ClienteController {
    constructor() {
        this.clientes = new Clientes();
    }

    adicionarCliente(nome, cpf, conta) {
        const cliente = new Cliente(nome, cpf, conta);
        this.clientes.inserir(cliente);
        this.atualizarListaClientes();
    }

    removerCliente(cpf) {
        this.clientes.remover(cpf);
        this.atualizarListaClientes();
    }

    listarClientes() {
        return this.clientes.listar();
    }

    pesquisarCliente(cpf) {
        return this.clientes.pesquisar(cpf);
    }

    atualizarListaClientes() {
        const listaClientes = document.getElementById("listaClientes");
        listaClientes.innerHTML = '';
        this.clientes.listar().forEach(cliente => {
            const li = document.createElement("li");
            li.textContent = `Nome: ${cliente.nome}, CPF: ${cliente.cpf}, Conta: ${cliente.conta}`;
            listaClientes.appendChild(li);
        });
    }
}

const clienteController = new ClienteController();

function adicionarCliente() {
    const nome = document.getElementById("nome").value;
    const cpf = document.getElementById("cpf").value;
    const conta = document.getElementById("conta").value;
    clienteController.adicionarCliente(nome, cpf, conta);
    document.getElementById("formCliente").reset();
}

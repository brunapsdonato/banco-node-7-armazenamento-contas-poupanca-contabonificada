let contaController = new ContaController();
contaController.listar();
const c1 = new Conta('1', 100);
const p1 = new Poupanca('2', 100);
const cb1 = new ContaBonificada('3', 0);
console.log('Conta: ' + c1.saldo);
p1.atualizarSaldoAniversario();
console.log('Poupanca: ' + p1.saldo);
cb1.creditar(100);
console.log('Conta Bonificada: ' + cb1.saldo);

const clientes = new Clientes();
clientes.inserir(new Cliente("João da Silva", "123.456.789-00", "Conta123"));
clientes.inserir(new Cliente("Maria Oliveira", "987.654.321-00", "Conta456"));
clientes.inserir(new Cliente("Ana Pereira", "111.222.333-44", "Conta789"));
console.log("Clientes listados:");
console.log(clientes.listar());
console.log("Pesquisar cliente com CPF '123.456.789-00':");
console.log(clientes.pesquisar("123.456.789-00"));
console.log("Removendo cliente com CPF '123.456.789-00'");
clientes.remover("123.456.789-00");
console.log("Clientes listados após remoção:");
console.log(clientes.listar());


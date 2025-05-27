// For in -> lê os índices ou chaves do objeto

const pessoa = {
	nome: 'Luiz',
	sobrenome: 'Otávio',
	idade: 30,
};

const chave = 'nome';
console.log(pessoa['nome']);

// for (let i = 0; i < frutas.length; i++) {
// 	console.log(frutas[i]);
// }

for (let chave in pessoa) {
	console.log(chave, pessoa[chave]);
}

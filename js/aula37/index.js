const pessoa = {
	nome: 'Luiz',
	sobrenome: 'Otávio',
};

for (let chave in pessoa) {
	console.log(chave, pessoa[chave]);
}

// for (let i = 0; i < nome.length; i++) {
// 	console.log(nome[i]);
// }

// for (let i in nome) {
// 	console.log(nome[i]);
// }

// for (let valor of nomes) {
// 	console.log(valor);
// }

// nomes.forEach(function (valor, indice) {
// 	console.log(valor, indice);
// });

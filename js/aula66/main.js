// Dobre os números
// const numeros = [5, 50, 80, 1, 2, 3, 5, 8, 7, 11, 15, 22, 27];

// const numerosEmDobro = numeros.map(function (valor, indice, array) {
// 	return valor * 2;
// });

// console.log(numerosEmDobro);

// Retorne uma string com o nome da pessoa
// Remova apenas a chave "nome" do objeto
// Adicione uma chave id em cada objeto (id)
// Lembre sempre de fazer uma cópia porque os valores aqui são trabalhados por referência

const pessoas = [
	{ nome: 'Luiz', idade: 62 },
	{ nome: 'Maria', idade: 23 },
	{ nome: 'Eduardo', idade: 55 },
	{ nome: 'Letícia', idade: 19 },
	{ nome: 'Rosana', idade: 32 },
	{ nome: 'Wallace', idade: 47 },
];

const nomes = pessoas.map((obj) => obj.nome);
const idades = pessoas.map((obj) => ({ idade: obj.idade }));

// const comIds = pessoas.map(function (obj, indice) {
// 	const newObj = { ...obj };
// 	newObj.id = indice + 1;
// 	return newObj;
// });

const comIds = pessoas.map((obj, indice) => {
	const newObj = { ...obj };
	newObj.id = indice + 1;
	return newObj;
});

// console.log(nomes);
// console.log(idades);
console.log(comIds);

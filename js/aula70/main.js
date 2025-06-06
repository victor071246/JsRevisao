// Factory functions / Constructor function / Classes
function Pessoa(nome, sobrenome) {
	this.nome = nome;
	this.sobrenome = sobrenome;
}

const p1 = new Pessoa('Luiz', 'Miranda');
Object.freeze(p1);
p1 = 'Outra coisa';
p1.nome = 'Outra coisa';
p1.sobrenome = 'QLQ';
p1.fala = function () {
	console.log('Oi');
};
p1.fala();
const p2 = new Pessoa('Maria', 'Miranda');

console.log(p1);
console.log(p2);

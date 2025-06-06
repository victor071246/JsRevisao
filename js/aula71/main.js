// defineProperty -> defineProperties
function Produto(nome, preco, estoque) {
	Object.defineProperty(this, 'estoque', {
		enumerable: true, // mostra a chave
		value: function () {
			return estoque;
		}, // define o valor
		writable: false, // pode alterar
		configurable: false, // configurável
	});
}

const p1 = new Produto('Camiseta', 20, 3);
console.log(p1);

for (let chave in p1) {
	console.log(chave);
}

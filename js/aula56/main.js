// Factory function (Função fábrica)
// Constructor function (Função construtora)
function criaPessoa(nome, sobrenome, altura, peso) {
	return {
		nome,
		sobrenome,

		// Getter
		get nomeCompleto() {
			return `${this.nome} ${this.sobrenome}`;
		},

		// Setter
		set nomeCompleto(valor) {
			valor = valor.split(' ');
			this.nome = valor.shift();
			this.sobrenome = valor.join(' ');
			console.log(valor);
		},

		fala: function (assunto) {
			return `${this.nome} está falando ${assunto}.`;
		},
		altura,
		peso,

		// Getter
		get imc() {
			const indice = this.peso / this.altura ** 2;
			return indice.toFixed(2);
		},
	};
}

const p1 = criaPessoa('Victor', 'Dadério', 1.8, 80);
const p2 = criaPessoa('João', 'Dadério', 1.8, 57);
const p3 = criaPessoa('Junior', 'Dadério', 1.5, 110);

console.log(p1.imc);
console.log(p2.imc);
console.log(p3.imc);

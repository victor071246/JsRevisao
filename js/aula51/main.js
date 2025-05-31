function criaMultiplicador(multiplicador) {
	// multiplicador
	return function multiplicacao(n) {
		return n * multiplicador;
	};
}

const duplica = criaMultiplicador(2);
const triplica = criaMultiplicador(3);
const quadriplica = criaMultiplicador(4);

console.log;

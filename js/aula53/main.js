function retornaFuncao(nome) {
	const nome = nome;
	return function () {
		return nome;
	};
}

const funcao = retornaFuncao('Luiz');
const funcao2 = retornaFuncao('João');

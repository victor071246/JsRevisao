import geraSenha from './geradores.js';

const senhaGerada = document.querySelector('.senha-gerada');
const qtdCaracteres = document.querySelector('.qtd-caracteres');
const chkMaiusculas = document.querySelector('.chk-maiusculas');
const chkMinusculas = document.querySelector('.chk-minusculas');
const chkNumeros = document.querySelector('.chk-numeros');
const chkSimbolos = document.querySelector('.chk-simbolos');
const gerarSenha = document.querySelector('.gerar-senha');

export default () => {
	gerarSenha.addEventListener('click', () => {
		senhaGerada.innerHTML = String(gera());

		// console.log(qtdCaracteres.value);
	});
};

function gera() {
	const senha = geraSenha(
		Number(qtdCaracteres.value),
		chkMaiusculas.checked,
		chkMinusculas.checked,
		chkNumeros.checked,
		chkSimbolos.checked
	);
	console.log(senha);
	return senha;
}
// geraSenha(5, true, true, true, true);

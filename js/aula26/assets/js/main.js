const form = document.querySelector('.formulario');
const paragrafo = document.querySelector('.calcular-txt');

form.addEventListener('submit', recebeEventoForm);

function recebeEventoForm(evento) {
	evento.preventDefault();
	const peso = document.querySelector('#peso').value;
	let altura_text = document.querySelector('#altura').value;

	const altura = altura_text.replace(',', '.');

	console.log(altura);

	const resultado = Number(peso) / Number(altura) ** 2;

	console.log(resultado);

	paragrafo.innerHTML = `Teste`;

	if (resultado < 18.5) {
		paragrafo.innerHTML = `Abaixo do peso`;
	} else if (resultado >= 18.5 && resultado <= 24.9) {
		paragrafo.innerHTML = `Peso normal`;
	} else if (resultado >= 25 && resultado <= 29.9) {
		paragrafo.innerHTML = `Sobrepeso`;
	} else if (resultado >= 30 && resultado <= 34.9) {
		paragrafo.innerHTML = `Obesidade grau 1`;
	} else if (resultado >= 35 && resultado <= 39.9) {
		paragrafo.textContent = `Obesidade grau 2`;
	} else if (resultado <= 40) {
		paragrafo.innerHTML = `Obesidade grau 3`;
	} else {
		paragrafo.innerHTML = `Dados inválidos`;
	}
}

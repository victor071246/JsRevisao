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

	if (resultado > 18.5) {
	} else if (resultado >= 18.5 && resultado <= 24.9) {
	} else if (resultado >= 25 && resultado <= 29.9) {
	} else if (resultado >= 30 && resultado <= 34.9) {
	} else if (resultado >= 35 && resultado <= 39.9) {
	}
}

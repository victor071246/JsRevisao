const titulo = document.querySelector('.texto');
const data = new Date();
titulo.innerHTML = data.toLocaleString('pt-BR', {
	dateStyle: 'full',
	timeStyle: 'short',
});

// const data = new Date('2019-10-07 22:52');
// let diaSemanaTexto = '';
// let diaMesTexto = '';

// function pegarDia(data) {
// 	const diaSemana = data.getDay();

// 	switch (diaSemana) {
// 		case 0:
// 			return 'Domingo';
// 		case 1:
// 			return 'Segunda-feira';

// 		case 2:
// 			return 'Terça-feira';

// 		case 3:
// 			return 'Quarta-feira';

// 		case 4:
// 			return 'Quinta-feira';

// 		case 5:
// 			return 'Sexta-feira';

// 		case 6:
// 			return 'Sábado';

// 		default:
// 			return;
// 	}
// }

// function pegarMes(data) {
// 	const diaMes = data.getMonth();

// 	switch (diaMes) {
// 		case 0:
// 			return 'Janeiro';

// 		case 1:
// 			return 'Fevereiro';

// 		case 2:
// 			return 'Março';

// 		case 3:
// 			return 'Abril';

// 		case 4:
// 			return 'Maio';

// 		case 5:
// 			return 'Junho';

// 		case 6:
// 			return 'Julho';

// 		case 7:
// 			return 'Agosto';

// 		case 8:
// 			return 'Setembro';

// 		case 9:
// 			return 'Outubro';

// 		case 10:
// 			return 'Novembro';

// 		case 11:
// 			return 'Dezembro';

// 		default:
// 			return;
// 	}
// }

// function formatarData(data) {
// 	const nomeDiaDaSemana = pegarDia(data);
// 	const nomeDiaDoMes = pegarMes(data);
// 	const hora = data.getHours();
// 	const minuto = data.getMinutes();
// 	const dia = data.getDate();
// 	const ano = data.getFullYear();

// 	return `${nomeDiaDaSemana.toLowerCase()}, ${dia} de ${nomeDiaDoMes.toLowerCase()} de ${ano} <br>${hora}:${minuto}`;
// }

// const conteudo = formatarData(data);

// console.log(conteudo);
// titulo.innerHTML = conteudo;

// Outra forma
// function getNomeMes(numeroMes) {
// 	const meses = [
// 		'janeiro',
// 		'fevereiro',
// 		'março',
// 		'abril',
// 		'junho',
// 		'julho',
// 		'agosto',
// 		'setembro',
// 		'outrubo',
// 		'novembro',
// 		'dezembro',
// 	];
// 	return meses[numeroMes];
// }

// function getNomeDia(numeroDia) {
// 	const dias = [
// 		'Domingo',
// 		'Segunda-feira',
// 		'Terça-feira',
// 		'Quarta-feira',
// 		'Quinta-feira',
// 		'Sexta-feira',
// 		'Sábado',
// 	];
// 	return dias[numeroDia];
// }

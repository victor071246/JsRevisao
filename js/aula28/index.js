function zeroAEsquerda(num) {
	return num >= 10 ? num : `0${num}`;
}

function formataData(data) {
	const dia = zeroAEsquerda(data.getDate());
	const mes = zeroAEsquerda(data.getMonth() + 1);
	const ano = zeroAEsquerda(data.getFullYear());
	const hora = zeroAEsquerda(data.getHours());
	const minuto = zeroAEsquerda(data.getMinutes());
	const segundo = zeroAEsquerda(data.getSeconds());
	return `${dia}/${mes}/${ano} ${hora}:${minuto}:${segundo}`;
}

const data = new Date();
const dataBrasil = formataData(data);
console.log(data);
console.log(dataBrasil);

// // const tresHoras = 60 * 60 * 3 * 1000;
// // const umDia = 60 * 60 * 24 * 1000;
// // const data = new Date(0 + tresHoras + umDia);
// // const data = new Date(2019, 3, 20, 15, 14, 60); // ano, mes, dia, hora, minuto, segundo, milésimo
// const data = new Date('2019-04-20 20:20:59.100');
// console.log('Dia', data.getDate()); // numero do dia
// console.log('Mês', data.getMonth() + 1); // numero do mês
// console.log('Ano', data.getFullYear()); // numero do ano
// console.log('Hora', data.getHours()); // numero da hora
// console.log('Minuto', data.getMinutes()); // numero do minuto
// console.log('Segundo', data.getSeconds()); // numero do segundo
// console.log('Milesegundo', data.getMilliseconds()); // numero do milesegundo
// console.log('Número do dia da semana', data.getDay()); // numero do dia da semana
// console.log(data.toString());
// console.log(Date.now);

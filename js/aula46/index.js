function mostraHora() {
	let data = new Date();

	return data.toLocaleTimeString('pt-BR', {
		hour12: false,
	});
}

// function funcaoDoIntervalo() {
// 	console.log(mostraHora());
// }

// setInterval(() => console.log(mostraHora()), 1000);

setInterval(function () {
	console.log(mostraHora());
}, 1000);

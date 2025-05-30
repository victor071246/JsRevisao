function relogio() {
	function getTimeFromSeconds(ms) {
		const data = new Date(ms * 1000);
		return data.toLocaleTimeString('pt-BR', {
			hour12: false,
			timeZone: 'UTC',
		});
	}

	console.log(getTimeFromSeconds(10));

	// new Date(0);

	const relogio = document.querySelector('.relogio');
	const pausar = document.querySelector('.pausar');
	const iniciar = document.querySelector('.iniciar');
	const zerar = document.querySelector('.zerar');
	let segundos = 0;
	let timer;

	function iniciarRelogio() {
		timer = setInterval(function () {
			segundos++;
			relogio.innerHTML = getTimeFromSeconds(segundos);
		}, 1000);
	}

	document.addEventListener('click', function (e) {
		const el = e.target;

		if (el.classList.contains('zerar')) {
			clearInterval(timer);
			relogio.classList.remove('pausado');
			relogio.innerHTML = '00:00:00';
			segundos = 0;
		}
		if (el.classList.contains('iniciar')) {
			relogio.classList.remove('pausado');
			clearInterval(timer);
			iniciarRelogio();
		}
		if (el.classList.contains('pausar')) {
			clearInterval(timer);
			relogio.classList.add('pausado');
		}
	});
}

relogio();

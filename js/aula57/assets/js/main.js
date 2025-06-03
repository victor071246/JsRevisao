function criaCalculadora() {
	return {
		display: document.querySelector(),

		inicia() {
			this.cliqueBotoes;
		},

		cliqueBotoes() {
			document.addEventListener('click', function (e) {
				const el = e.target;

				if (e.classList.contains('btn-num')) {
					this.btnParaDisplay();
				}
			});
		},
	};
}

const calculadora = criaCalculadora();
calculadora.inicia();

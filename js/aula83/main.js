function teste() {
	console.log('Este é meu teste.');
}

class ControleRemoto {
	constructor(tv) {
		this.tv = tv;
		this.volume = 0;
		teste();
	}

	// Método de instância
	aumentarVolume() {
		this.volume += 2;
	}
	diminuirVolume() {
		this.volume -= 2;
	}

	// Método de instância
	static soma(x, y) {
		console.log(this);
	}
}

const controle1 = new ControleRemoto('LG');
ControleRemoto.soma();

console.log(controle1);

console.log(ControleRemoto.soma(2, 4));

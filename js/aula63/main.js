const nomes = ['Maria', 'João', 'Eduardo', 'Gabriel', 'Júlia'];

// nomes.splice(índice, delete, elem1, elem2, elem3);
// pop
// const removidos = nomes.splice(-1, 1);

// shift
// const removidos = nomes.splice(0, 1);

removidos = nomes.splice(0, 0, 'Luiz', 'Otávio', 'Miranda');
console.log(nomes, removidos);

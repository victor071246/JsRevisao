const section = document.getElementById('secao');

const numero = 55;

const raiz = Math.sqrt(numero);

const numberNaN = isNaN(numero);

const ceil55 = Math.ceil(numero);

const flor55 = Math.floor(numero);

const duascasas55 = numero.toFixed(2);

section.innerHTML += `<p><br>Raiz quadrada: ${raiz}</p>`;

section.innerHTML += `<p><br>É NaN: ${numberNaN}</p>`;

section.innerHTML += `<p><br>Arredondando pra baixo: ${flor55}<br>`;

section.innerHTML += `<p><br>Arredondando pra cima: ${ceil55}<br>`;

section.innerHTML += `<p><br>Com duas casas decimais: ${duascasas55}<br>`;

console.log('Script carregado');

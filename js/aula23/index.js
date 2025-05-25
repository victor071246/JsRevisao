// falsy -> falso
// false -> falso
// 0
// '' (string vazia)
// null / undefined
// NaN
// console.log('Luiz' && 'Maria' && NaN);
const a = 0;
const b = null;
const c = 'false'; // Esse trecho é o que está sendo exibido
const d = false;
const e = NaN;

console.log(a || b || c || d || e);

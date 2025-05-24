/*
 * Primitivos (imutáveis) - string, number, boolean, undefined, null (bigint, symbol) valores copiáveis

Referência (mutável) - array, object, function
*/
const a = {
    nome: 'Luiz',
    sobrenome: 'Otávio',
};
const b = { ...a };

a.nome = 'João';
console.log(a);
console.log(b);

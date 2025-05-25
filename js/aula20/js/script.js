function meuEscopo() {
    const form = document.querySelector('.form');
    const resultado = document.querySelector('.resultado');

    const pessoas = [];

    // form.onsubmit = function (evento) {
    //     evento.preventDefault();
    //     alert(1);
    //     console.log('Foi enviado.');
    // };
    function criarObjeto(nome, sobrenome, peso, altura) {
        {
            nome, sobrenome, peso, altura;
        }
    }

    function recebeEventoForm(evento) {
        evento.preventDefault();
        const nome = form.querySelector('.nome').value;
        const sobrenome = form.querySelector('.sobrenome').value;
        const peso = form.querySelector('.peso').value;
        const altura = form.querySelector('.altura').value;

        const pessoa = { nome, sobrenome, peso, altura };
        console.log(pessoa);
        pessoas.push(pessoa);
        resultado.innerHTML += `<br>${pessoa.nome} | ${pessoa.sobrenome} | ${pessoa.peso} | ${pessoa.altura}`;
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();

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
        const nome = form.querySelector('.nome');
        const sobrenome = form.querySelector('.sobrenome');
        const peso = form.querySelector('.peso');
        const altura = form.querySelector('.altura');

        pessoa = { nome, sobrenome, peso, altura };
    }

    form.addEventListener('submit', recebeEventoForm);
}
meuEscopo();

exports.paginaInicial = (req, res) => {
	res.send(`
        <form action="/" method="POST">
        Nome do cliente: <input type="text" name="nome">        
        Outro valor: <input type="text" name="outrocampo">
        <button>Enviar Formulário</button>
        </form>
        `);
};

exports.trataPost = (req, res) => {
	res.send('Ei, sou sua nova rota de POST.');
};

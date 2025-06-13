const Login = require('../models/loginModel');

exports.index = (req, res) => {
	if (req.session.user) return res.render('login-logado');
	res.render('login');
};

exports.register = async function (req, res) {
	try {
		const login = new Login(req.body);
		await login.register();

		console.log('Erros encontrados: ', login.errors);

		if (login.errors.length > 0) {
			req.flash('errors', login.errors);
			req.session.save(function () {
				return res.redirect('/login/index');
			});
			return;
		}
		req.flash('success', 'Seu usuário foi criado com sucesso');
		req.session.save(function () {
			return res.redirect('/login/index');
		});
		// res.send(login.errors);
	} catch (e) {
		console.log(e);
		res.render('404');
	}
};

exports.login = async function (req, res) {
	try {
		const login = new Login(req.body);
		await login.login();

		console.log('Erros encontrados: ', login.errors);

		if (login.errors.length > 0) {
			req.flash('errors', login.errors);
			req.session.save(function () {
				return res.redirect('/login/index');
			});
			return;
		}

		req.flash('success', 'Usuário conectado com sucesso.');
		req.session.user = login.user;
		req.session.save(function () {
			return res.redirect('/login/index');
		});
		// res.send(login.errors);
	} catch (e) {
		console.log(e);
		res.render('404');
	}
};

exports.logout = function (req, res) {
	req.session.destroy();
	res.redirect('/');
};

require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose
	.connect(process.env.MONGO_URI)
	.then(() => {
		console.log('Base de dados conectada');
		app.emit('pronto');
	})
	.catch((e) => console.log(e));

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const routes = require('./routes');
const path = require('path');

app.use(
	express.urlencoded({
		extended: true,
	})
);
app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session({
	secret: 'asd1e3221dcadvqe14KSad3141@_',
	store: MongoStore.create({ mongoUrl: process.env.MONGO_URI }),
	resave: false,
	saveUninitialized: false,
	cookie: {
		maxAge: 1000 * 60 * 60 * 24 * 7,
		httpOnly: true,
	},
});
app.use(sessionOptions);
app.use(flash());

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

// Nossos próprios middlewares
app.use(routes);

app.on('pronto', () => {
	app.listen(3000, () => {
		console.log('Acessar http://localhost:3000');
		console.log('Servidor executando na porta 3000');
	});
});

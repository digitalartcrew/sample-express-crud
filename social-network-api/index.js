const express = require('express');
const bodyParser = require('body-parser');
const session = require('express-session');
const methodOverride = require('method-override');
const cors = require('cors');
const app = express();
const PORT = 8080;
const connection = require('./config/database');


connection.connect((err) => {
	if (err) throw err;
	console.log(`Connected as ${connection.threadId}`);
});

app.use(cors());

app.use(session({
	secret: 'donteknowsthepass',
	resave: true,
	saveUninitialized: true
})); // session secret

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// use method-override
app.use(methodOverride('_method'));

const authRoutes = require('./routes/auth');
const usersRoutes = require('./routes/users');
const postsRoutes = require('./routes/posts');

app.use('/api/auth', authRoutes);
app.use('/api/users', usersRoutes);
app.use('/api/posts', postsRoutes);

app.listen(PORT, () => console.log(`Listening on PORT ${PORT}`));
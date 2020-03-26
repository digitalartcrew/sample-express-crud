const express = require('express');
const router = express.Router();
const connection = require("../config/database");

router.get("/", (req, res) => {
	console.log("...getting all users \n");
	connection.query('SELECT * FROM users', (err, result) => {
		if (err) throw err;
		console.log("Result: ", result);
		res.send(result);
	});
});

router.post("/", (req, res) => {
	console.log("...posting to all users \n");
	console.log('Request', req);
	connection.query('INSERT INTO users (username, email, password, firstName, lastName) VALUES (?,?,?,?,?)', [req.body.username, req.body.email, req.body.password, req.body.firstName, req.body.lastName], (err, result) => {
		if (err) throw err;
		console.log("Result: ", result);
		res.send(result);
	});
});

router.delete("/", (req, res) => {
	console.log("...posting to all users \n");

	connection.query('DELETE FROM users WHERE userId = ?', req.query.userId, (err, result) => {
		if (err) throw err;
		console.log("Result: ", result);
		res.send(result);
	});
});

router.get('/:userId', (req, res) => {
	console.log("...getting a user by id \n");
	connection.query('SELECT * FROM users WHERE userId = ?', req.params.userId, (err, result) => {
		if (err) throw err;
		console.log("Result: ", result);
		res.send(result);
	});
});

router.get("/:userId/friends", (req, res) => {
	console.log("...get a list of all users friends by userId \n");
	connection.query('SELECT * FROM friends WHERE userId = ?', req.params.userId, (err, result) => {
		if (err) throw err;
		console.log("Result: ", result);
		res.send(result);
	});
});

router.get("/:userId/friends/add", (req, res) => {
	console.log("...adding a friend to users by userId \n");
	connection.query('INSERT INTO friends (friendId, userId) VALUES (?,?)', [req.query.friendId, req.params.userId], (err, result) => {
		if (err) throw err;
		console.log("Result: ", result);
		res.send(result);
	});
});

router.put('/', (req, res) => {
	console.log("...updating a user");
	connection.query('UPDATE users SET firstName = ?, lastName = ? WHERE userId = ?', [req.query.firstName, req.query.lastName, req.query.userId], (err, result) => {
		if (err) throw err;
		console.log("Result: ", result);
		res.send(result);
	})
});

router.delete("/:userId/friends/remove", (req, res) => {
	console.log("...get a list of all users friends by userId \n");
	connection.query('DELETE FROM friends WHERE userId = ? AND friendId = ?', [req.params.userId, req.query.friendId], (err, result) => {
		if (err) throw err;
		console.log("Result: ", result);
		res.send(result);
	});
});


module.exports = router;

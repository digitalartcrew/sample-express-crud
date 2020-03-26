const express = require('express');
const router = express.Router();
const connection = require('../config/database');

router.get("/", (req, res) => {
	console.log("...getting all posts \n");
	connection.query('SELECT * FROM posts', (err, result) => {
		if (err) throw err;
		console.log("Result: ", result);
		res.send(result);
	});
});

router.post("/", (req, res) => {
	console.log("...inserting a post \n");
	connection.query('INSERT INTO posts (title, content, userId)', [req.query.title, req.query.content, req.query.userId], (err, result) => {
		if (err) throw err;
		console.log("Result: ", result);
		res.send(result);
	});
});

router.post("/", (req, res) => {
	console.log("...updating a post \n");
	connection.query('UPDATE posts SET title = ?, content = ? WHERE postId = ?', [req.query.title, req.query.content, req.query.postId], (err, result) => {
		if (err) throw err;
		console.log("Result: ", result);
		res.send(result);
	});
});

router.get("/:userId", (req, res) => {
	console.log("...getting all posts by user id \n");
	connection.query('SELECT * FROM posts WHERE userId = ?', req.params.userId, (err, result) => {
		if (err) throw err;
		console.log("Result: ", result);
		res.send(result);
	});
});

router.get("/:userId/:postId", (req, res) => {
	console.log("...getting a single post by userId and postId \n");
	connection.query('SELECT * FROM posts WHERE userId = ? AND postId = ?', [req.params.userId, req.params.postId], (err, result) => {
		if (err) throw err;
		console.log("Result: ", result);
		res.send(result);
	});
});

router.delete("/posts/:postId", (req, res) => {
	console.log("...deleting a post \n");
	connection.query('DELETE FROM posts WHERE postId = ?', req.params.postId, (err, result) => {
		if (err) throw err;
		console.log("Result: ", result);
		res.send(result);
	});
});

router.put('/posts/:postId', (req, res) => {
	console.log("...updating a post");
	connection.query('UPDATE posts SET title = ?, content = ? WHERE postId = ?', [req.query.title, req.query.content, req.params.postId], (err, result) => {
		if (err) throw err;
		console.log("Result: ", result);
		res.send(result);
	})
});

module.exports = router;

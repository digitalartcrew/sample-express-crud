const express = require('express');
const mysql = require('mysql');
const router = express.Router();

const connection = require('../config/database');

router.post("/login", (req,res) => {
  console.log("...logging in user \n");
  const username = req.query.username;
  const password = req.query.password;

  connection.query('SELECT * FROM users WHERE username = ? AND password = ?', [username, password], (err, result) => {
    if (err) throw err;
    console.log("Result: ", result);

    if (result.length > 0) {
      res.redirect(`/api/users/${result.id}`);
      console.log("Redirect successful \n");
    } else {
      console.log('Username or password is incorrect');
    }
  });
});

router.post("/register", (req, res) => {
  console.log("...registering user \n");
  const username = req.query.username;
  const password = req.query.password;
  const email = req.query.email;

  connection.query('INSERT INTO users (username, email, password) VALUES (?,?,?)', [username, email, password], (err, result, fields) => {
    if (err) throw err;

    console.log('Insert result: ', result);

    if (result.affectedRows === 1) {
      connection.query('SELECT * FROM users WHERE userId = ?', result.insertId, (err, result) => {
        if (err) throw err;
        console.log("Result: ", result);

        if (result.length > 0) {
          res.send(`Logged in as user idL ${result.id}`);
          console.log("Redirect successful \n");
        } else {
          console.log('Username or password is incorrect');
        }
      });
    }
  });
});

router.get("/logout", (req, res) => {
  res.send("Logout");
  connection.end();
});
router.get("/lost-password", (req, res) => res.send("Lost Password"));

module.exports = router;

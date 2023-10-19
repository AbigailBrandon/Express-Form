const express = require('express');
const path = require('path');
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.static(path.join(__dirname, 'public')));

//to listen for submit form
app.post('/submit', (req, res) => {
  let firstname = req.body.firstname;
  let lastname = req.body.lastname;
  let email = req.body.email;
  res.send(`Server received: firstname - ${firstname}, lastname - ${lastname}, email - ${email}`);
});

app.get('/test', (req, res) => {
  res.send('hi there');
})

app.listen(3000);
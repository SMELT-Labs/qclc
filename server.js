const express = require("express");
const ejs = require("ejs");
require('dotenv/config');


const galleryRoute = require('./routes/gallery');
const contactRoute = require('./routes/contact');
const loginRoute = require('./routes/login');
const dashboardRoute = require('./routes/dashboard');


const app = express();
const PORT = 3000;

app.set('view engine', 'ejs');

app.use(express.static('public'))

app.use('/gallery', galleryRoute);
app.use('/contact', contactRoute);
app.use('/login', loginRoute);
app.use('/dashboard', dashboardRoute);

app.get("/", (req, res) => {
  res.render('index');
});

app.listen(PORT, console.log(`Server is running at http://localhost:${PORT}`));


const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;


app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));


app.use(express.static(path.join(__dirname, 'public')));


app.get('/', (req, res) => {
  res.render('index', { title: 'Projet Unity Ilias' });
});


app.get('/status', (req, res) => {
  res.json({ status: 'Application fonctionnelle ✅', date: new Date() });
});


app.listen(PORT, () => {
  console.log(`🚀 Serveur lancé sur http://localhost:${PORT}`);
});

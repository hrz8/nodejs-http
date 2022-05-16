const express = require('express');
const routerBarang = require('./routes/barang');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));

app.use('/barang', routerBarang);

app.get('*', (req, res) => {
  console.log('not found');
  res.status(404);
  res.send('Not Found');
});

app.use((err, req, res, next) => {
  console.error(err);

  if (err.message === 'credential error!!!') {
    res.set({'Content-Type': 'text/html'});
    res.status(401).send('Unauthorized');
  }

  res.status(500).send('Internal Server Error');
});

app.listen(3002)

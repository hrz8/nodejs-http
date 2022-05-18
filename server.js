const express = require('express');
const blogRouter = require('./routes/blog');
const app = express();

app.set('view engine', 'ejs');
app.use(express.urlencoded({extended: false}));
app.use(express.json({limit: '1mb'}));

app.use('/api/blog', blogRouter);

app.get('*', (req, res) => {
  console.log('not found');
  res.status(404);
  res.send('Not Found');
});

app.use((err, req, res, next) => {
  console.error(err);

  if (err.message === 'not_found') {
    res.status(404)
    res.json({error: 'not found'});
  }

  res.status(500).send('Internal Server Error');
});

app.listen(3002)

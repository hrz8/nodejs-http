const express = require("express");
const blogRouter = express.Router();
const dbBlog = require('../db/blog'); 

blogRouter.get('/', (req, res) => {
  const result = dbBlog.getAll();

  res.json(result);
});

blogRouter.get('/:id', (req, res) => {
  const id = Number(req.params.id);
  const result = dbBlog.getById(id);

  if (!result) {
    throw new Error('not_found');
  }

  res.json(result);
});

blogRouter.post('/', (req, res) => {
  const result = dbBlog.add(req.body.title, req.body.content, req.body.categories);

  res.json(result);
});

blogRouter.put('/:id', (req, res) => {
  const id = Number(req.params.id);
  const result = dbBlog.edit(id, req.body.title, req.body.content, req.body.categories);

  if (!result) {
    throw new Error('not_found');
  }

  res.json(result);
});

blogRouter.patch('/:id', (req, res) => {
  const id = Number(req.params.id);

  const payload = req.body;

  const result = dbBlog.patch(id, payload);


  if (!result) {
    throw new Error('not_found');
  }

  res.json(result);
});

blogRouter.delete('/:id', (req, res) => {
  const id = Number(req.params.id);
  const result = dbBlog.remove(id);

  res.json(result);
});

module.exports = blogRouter;

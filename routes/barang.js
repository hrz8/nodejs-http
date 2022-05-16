const express = require("express");
const barang = require("../db/barang");
const routerBarang = express.Router();

routerBarang.get('/list', (req, res) => {
  const data = { barang };
  res.status(200);
  res.render('barang/list', data);
});

routerBarang.get('/buat', (req, res) => {
  res.status(200);
  res.render('barang/buat');
});

routerBarang.post('/buat', (req, res) => {
  const newBarang = {
    nama: req.body.name,
    qty: Number(req.body.qty),
    tanggalMasuk: `${new Date().getDate()}-${new Date().getMonth()}-${new Date().getFullYear()}`
  }
  barang.push(newBarang);
  res.status(200);
  res.redirect('/barang/list');
});

module.exports = routerBarang;

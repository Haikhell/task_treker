const express = require('express');

const userController = require('../../../controllers/users');

const router = express.Router();

router.get('/get', async (req, res) => {
  res.send(await userController.get());
});

router.post('/create', async (req, res) => {
  res.send(await userController.create(req.body));
});

router.delete('/delete/:id', async (req, res) => {
  res.send(await userController.deletes(req.params.id));
});

router.post('/edit', async (req, res) => {
  res.send(await userController.edit(req.body));
});
module.exports = router;

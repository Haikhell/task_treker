const express = require('express');

const taskController = require('../../../controllers/tasks');

const router = express.Router();

router.get('/get', async (req, res) => {
  res.send(await taskController.get());
});

router.post('/create', async (req, res) => {
  res.send(await taskController.create(req.body));
});

router.post('/edit/:id', async (req, res) => {
  res.send(await taskController.editTask(req.body, req.params.id));
});

router.delete('/delete/:id', async (req, res) => {
  res.send(await taskController.deletes(req.params.id));
});

module.exports = router;

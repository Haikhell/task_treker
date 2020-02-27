const express = require('express');

const taskRouter = require('./tasks');
const userRouter = require('./users');

const router = express.Router();

router.use('/task', taskRouter);
router.use('/user', userRouter);

module.exports = router;

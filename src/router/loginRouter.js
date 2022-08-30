const express = require('express');
const { generateToken } = require('../readAndWritte');

const loginRouter = express.Router();

loginRouter.post('/', async (req, res) => {
  const result = generateToken();
    res.status(200).json({ token: result });
  });

module.exports = loginRouter;

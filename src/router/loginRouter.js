const express = require('express');
const { generateToken } = require('../readAndWritte');
const { emailValidation } = require('../middleware/emailValidation');
const { passwordValidation } = require('../middleware/passwordValidation');

const loginRouter = express.Router();

loginRouter.post('/', emailValidation, passwordValidation, async (_req, res) => {
     const result = generateToken();
    res.status(200).json({ token: result });
  });

module.exports = loginRouter;

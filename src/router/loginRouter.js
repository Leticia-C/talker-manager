const express = require('express');
// const { generateToken } = require('../readAndWritte');
const crypto = require('crypto');
const { emailValidation } = require('../middleware/emailValidation');
const { passwordValidation } = require('../middleware/passwordValidation');

const loginRouter = express.Router();

loginRouter.post('/', emailValidation, passwordValidation, (req, res) => {
   const result = crypto.randomBytes(8).toString('hex');
    res.status(200).json({ token: result });
  });

module.exports = loginRouter;

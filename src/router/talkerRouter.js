const express = require('express');
const fs = require('fs').promises;

const talkerRouter = express.Router();

talkerRouter.get('/', async (req, res) => {
    const talkerFile = await fs.readFile('./src/talker.json', 'utf8');
    const talker = JSON.parse(talkerFile);
    if (talker.length === 0) {
    return res.status(200).json([]);
     } 
    return res.status(200).json(talker);
  });

module.exports = talkerRouter;
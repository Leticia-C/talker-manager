const express = require('express');
const { readTalker, getATalkerById } = require('../readAndWritte');

const talkerRouter = express.Router();

talkerRouter.get('/', async (req, res) => {
    const talker = await readTalker();
    if (talker.length === 0) {
    return res.status(200).json([]);
     } 
    return res.status(200).json(talker);
  });

  talkerRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    const talker = await getATalkerById(Number(id));
    if (!talker) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
     } 
    return res.status(200).json(talker);
  });

module.exports = talkerRouter;
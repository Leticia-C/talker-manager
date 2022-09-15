const express = require('express');
const { readTalker, getATalkerById,
   createNewTalker, putTalker, deleteTalker, getTalkerByName } = require('../readAndWritte');
const { tokenValidation } = require('../middleware/tokenValidation');
const { userValidation } = require('../middleware/userValidation');
const { watchedAtValidation, rateValidations } = require('../middleware/valuesValidation');
const { talkValidation } = require('../middleware/talkValidation');

const talkerRouter = express.Router();

talkerRouter.get('/', async (req, res) => {
    const talker = await readTalker();
    if (talker.length === 0) {
    return res.status(200).json([]);
     } 
    return res.status(200).json(talker);
  });

  talkerRouter.get('/search', tokenValidation, async (req, res) => {
    const { q } = req.query;
    const talker = await getTalkerByName(q);
    res.status(200).json(talker);
   });

  talkerRouter.get('/:id', async (req, res) => {
    const { id } = req.params;
    const talker = await getATalkerById(Number(id));
    if (!talker) {
    return res.status(404).json({ message: 'Pessoa palestrante não encontrada' });
     } 
    return res.status(200).json(talker);
  });

  talkerRouter.post('/', tokenValidation, userValidation, 
   talkValidation, watchedAtValidation, rateValidations, async (req, res) => {
    const talker = await createNewTalker(req.body);
   res.status(201).json(talker);
  });

talkerRouter.put('/:id', tokenValidation, userValidation, 
 talkValidation, watchedAtValidation, rateValidations, async (req, res) => {
  const id = Number(req.params.id);
    const talker = await putTalker(id, req.body);
    res.status(200).json(talker);
});

talkerRouter.delete('/:id', tokenValidation, async (req, res) => {
  const id = Number(req.params.id);
  await deleteTalker(id);
   res.sendStatus(204);
});

module.exports = talkerRouter;
const express = require('express');
const bodyParser = require('body-parser');
const talkerRouter = require('./router/talkerRouter');
const loginRouter = require('./router/loginRouter');

const app = express();
app.use(bodyParser.json());

const HTTP_OK_STATUS = 200;
const PORT = '3001';

// não remova esse endpoint, e para o avaliador funcionar
app.get('/', (_request, response) => {
  response.status(HTTP_OK_STATUS).send();
});

app.use('/talker', talkerRouter);

app.use('/login', loginRouter);

app.listen(PORT, () => {
  console.log('Online');
});

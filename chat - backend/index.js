const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

let messages = [
  {
    id: 1,
    user: 'Марина',
    text: 'Привет. Как дела?',
  },
  {
    id: 2,
    user: 'Павел',
    text: 'Всё ок. Как сама?',
  },
];
let maxId = 2;

app.post('/api/messages_get', (req, res) => {
  res.json(messages);
});

app.post('/api/message_add', (req, res) => {
  const { user, text } = req.body;
  maxId++;
  messages.push({
    id: maxId,
    user,
    text,
  });
  res.json({
    success: true,
  });
});

const port = 13531;
app.listen(port, () => {
  console.log(`Бекенд запущен на порту ${port}`);
});
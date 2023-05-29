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

let maxRequests = 60;

// minutes
let period = 1;

const blockedIps = {};
// [ip]: <count_of_requests>
const requests = {};

function bad(req, res) {
  // console.log('remoteaddr' + req.socket.remoteAddress);
  // console.log('xforwarded' + req.headers['x-forwarded-for']);
  const ip = req.socket.remoteAddress;
  if (ip in blockedIps) {
    res.json({
      error: 'Too many requests',
    });
    return true;
  }
  if (!(ip in requests)) {
    requests[ip] = 0;
  }
  requests[ip]++;
  if (requests[ip] >= maxRequests) {
    blockedIps[ip] = true;
  }
  console.log(requests);
  setTimeout(() => {
    if (ip in requests) {
      requests[ip]--;
      console.log(requests);
      if (requests[ip] <= 0) {
        delete requests[ip];
      }
    }
  }, period * 60 * 1000);

  return false;
}

app.post('/api/messages_get', (req, res) => {
  res.json(messages);
});

app.post('/api/message_add', (req, res) => {
  if (bad(req, res)) {
    return;
  }
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
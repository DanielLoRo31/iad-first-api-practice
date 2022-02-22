import express from 'express';
import { json } from 'body-parser';

const app = express();

app.use(json());

app.get('/health', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.end(JSON.stringify({
    message: 'Target group is healthy'
  }));
});

app.get('/hello', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.end(JSON.stringify({
    message: 'Hello world!'
  }));
});

app.listen(3000, () => {
  console.log('app started in port 3000');
});

import express from 'express';
import { json } from 'body-parser';
import dynamoose from 'dynamoose';
import dotenv from 'dotenv';
import Person from './Person';

dynamoose.aws.sdk.config.update({ region: 'us-east-1' });

const app = express();

app.use(json());

app.get('/hello', (req, res) => {
  res.writeHead(200, {
    'Content-Type': 'application/json'
  });
  res.end(JSON.stringify({
    message: 'Hello world!'
  }));
});

app.post('/people', async (req, res) => {
  const { id, name, age } = req.body;

  const person = new Person({ id, name, age });
  await person.save();

  res
    .writeHead(200, {
      'Content-Type': 'application/json'
    })
    .end();
});

app.listen(3000, () => {
  console.log('app started in port 3000');
});

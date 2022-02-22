import dynamoose from 'dynamoose';

const personSchema = new dynamoose.Schema({
  id: {
    type: String,
    hashKey: true
  },
  name: String,
  age: Number
});

export default dynamoose.model('jorge-h-people', personSchema, {create: true});

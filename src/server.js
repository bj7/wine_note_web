const express = require('express')
const app = express()
const path = require('path')
const { Client } = require('pg');
const graphqlHTTP = require('express-graphql');
const {buildSchema} = require('graphql');
const connect = require('./bootstrap')

let client = connect()

const schema = buildSchema(`
  type Note {
    wine: String
    vintage: Int
    price: Float
    region: String
    country: String
    varietal: String
    notes: String
    rating: Int
  }
  type Query {
    gethello: String
    getNotes: [Note]
  }
`)
const root = {
  gethello: () => {
    return "Hello World"
  },
  getNotes: () => {
    return client.query("SELECT * FROM notes")
      .then(res => res.rows) 
  }
}

app.use('/graphql', graphqlHTTP({
  schema: schema,
  rootValue: root,
  graphiql: true,
}));

app.use(express.static(path.join(__dirname, '../build')))
app.use(express.json())

app.post('/save', function(req, res) {
  console.log(req.body);
  
  res.send('success')
})
app.get('/helloworld', (req, res) => {
  console.log('helloworld')
  res.sendFile(path.join(__dirname, './', 'hello.html'))
});

let port = process.env.PORT;
console.log('here is the port:', port);

if (port == null || port == "") {
  port = 5000;
}
app.listen(port, () => console.log(`WineNote app listening on port ${port}!`))
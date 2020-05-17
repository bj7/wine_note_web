const express = require('express')
const app = express()
const path = require('path')
const { Client } = require('pg');
const graphqlHTTP = require('express-graphql');
const graphql = require('graphql');

let client;
// heroku postgres specific
if (process.env.DATABASE_URL) {
  client = new Client({
    connectionString: process.env.DATABASE_URL,
    ssl: {
      rejectUnauthorized: false
    }
  });
} else { // just a local-only macOS postgres server
  client = new Client({
    user: '',
    host: 'localhost',
    database: 'local_heroku',
    password: '',
    port: '5432'
  })
}
// setup note db on first load
client.connect()
const createIfNotExists = `
CREATE TABLE IF NOT EXISTS Notes (
  wine          text,
  vintage       integer,
  price         numeric(20, 2),
  region        text,
  country       text,
  varietal      text,
  notes         text,
  rating        integer
)
`;
client.query(createIfNotExists, (err, res) => {
  // console.log(err, res)
  // client.end()
})

const noteType = new graphql.GraphQLObjectType({
  name: 'Note',
  fields: {
    wine: { type: graphql.GraphQLString },
    vintage: { type: graphql.GraphQLInt },
    price: { type: graphql.GraphQLFloat },
    region: { type: graphql.GraphQLString },
    country: { type: graphql.GraphQLString },
    varietal: { type: graphql.GraphQLString },
    notes: { type: graphql.GraphQLString },
    rating: { type: graphql.GraphQLInt }
  }
})
const queryType = new graphql.GraphQLObjectType({
  name: 'Query',
  fields: {
    getNotes: {
      type: noteType,
      resolve: () => {
        return client.query("SELECT * FROM notes", (err, res) => {
          console.log(res)
        })
      }
    },
    gethello: {
      type: graphql.GraphQLString,
      resolve: () => {
        return 'Hello World'
      }
    }
  }
})
const schema = new graphql.GraphQLSchema({query: queryType});

app.use('/graphql', graphqlHTTP({
  schema: schema,
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
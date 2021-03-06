const express = require('express')
const app = express()
const path = require('path')
const graphqlHTTP = require('express-graphql');
const bootstrap = require('./bootstrap')

let client = bootstrap.connect()
let schema = bootstrap.setupSchema()
app.use('/graphql', graphqlHTTP({
  schema: schema.schema,
  rootValue: schema.root,
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
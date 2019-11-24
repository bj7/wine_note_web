const express = require('express')
const app = express()
const port = 3000


app.use(express.static('../../build'))
// app.get('/', (req, res) => {
//     console.log("root");
//     // res.send('index.js')
// });
app.get('/helloworld', (req, res) => res.send('hello world'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
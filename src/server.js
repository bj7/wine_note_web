const express = require('express')
const app = express()

app.use(express.static('../../build'))
// app.get('/', (req, res) => {
//     console.log("root");
//     // res.send('index.js')
// });
app.get('/helloworld', (req, res) => res.send('hello world'))

let port = process.env.PORT;
if (port == null || port == "") {
  port = 3000;
}
app.listen(port);
app.listen(port, () => console.log(`Example app listening on port ${port}!`))
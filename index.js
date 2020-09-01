const express = require('express')
const app = express()

app.get('/', (req, res) => {
  res.send('hello')
})
app.use((req, res, next) => {
  res.status(404).send('404')
})
app.listen(3000)
console.log('cgqd');
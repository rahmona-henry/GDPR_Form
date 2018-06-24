const express = require('express')
const app = express()

app.use(express.static('client'))

///GET Routes///
app.get('/', (req,res) => res.send("Hello DubSpot"))
app.listen(3000, () => console.log('App listening on port 3000!'))

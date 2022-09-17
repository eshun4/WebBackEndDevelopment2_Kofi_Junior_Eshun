const express = require('express')
const app = express()

const port = 3000

app.get('/', require('./routes/index'))

app.listen(port, ()=>{
    console.log('Example app listening on port ' + port)
})
const express = require('express')
const app = express()
const port = 5000

const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://Jin:1q2w3e4r@ubd-higbl.mongodb.net/test?retryWrites=true&w=majority',{
    useNewUrlParser : true, useUnifiedTopology: true, useCreateIndex : false
}).then(() => console.log("MongoDb Conneted.."))
.catch(err => console.log(err))


app.get('/', (req, res) => res.send('Hello World! ~~아령하세요~~'))

app.listen(port, () => console.log('Example app listening on port $(port)!'))

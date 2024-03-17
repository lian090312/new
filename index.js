const express = require('express')
const app = express()
const port = 5000


const mongoose = require('mongoose')
mongoose.connect('mongodb+srv://haru:kimjung7^^@boilerplate.nuatdza.mongodb.net/?retryWrites=true&w=majority&appName=boilerplate', {
    useNewUrlParser: true, useUnifedTopology: true, useCreateIndex: true, useFindAndModify: false
}).then(() => console.log('MongoDB Conncted...'))
.catch(err => console.log(err))

app.get('/', (req, res) => res.send('Hello World!'))

app.listen(port, () => console.log(`Example app listening on port ${port}!`))
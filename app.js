const express = require('express')
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const indexRouter = require('./routes/index')
const app = express()
app.use(bodyParser.json())
app.use('/api',indexRouter)
const mongoURI = `mongodb://localhost:27017/todo-demo`

//useNewUrlParser = 몽고db가 주소가 여러가지 있음, 옛날거 요즘꺼 다 잘 쓰게해달라는 뜻
mongoose.connect(mongoURI,{useNewUrlParser:true})
    .then(()=>{
        console.log('mongoose connected');
    })
    .catch((err)=>{
        console.log('DB connection fail', err);
    });

app.listen(5000,()=>{
    console.log('server on 5000');
});

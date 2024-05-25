const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const indexRouter = require('./routes/index');
const cors = require('cors');
require('dotenv').config();
const app = express()
const MONGODB_URI_PROD= process.env.MONGODB_URI_PROD;

app.use(cors());
app.use(bodyParser.json());
app.use('/api',indexRouter);

const mongoURI = MONGODB_URI_PROD;

console.log('monmon',MONGODB_URI_PROD)

//useNewUrlParser = 몽고db가 주소가 여러가지 있음, 옛날거 요즘꺼 다 잘 쓰게해달라는 뜻
//{useNewUrlParser:true}
mongoose.connect(mongoURI)
    .then(()=>{
        console.log('mongoose connected');
    })
    .catch((err)=>{
        console.log('DB connection fail', err);
    });

const port = process.env.PORT || 5001;
app.listen(port, () => {
    console.log('server on 5001');
  });

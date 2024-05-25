const { Timestamp } = require("mongodb");
const mongoose = require('mongoose')
const Schema = mongoose.Schema

const taskSchema = Schema({
    task:{
        type:String,
        required:true
    },
    isComplete:{
        type:Boolean,
        required:false
    },
},{timestamps:true})
// timestamps : 자료 생성 날짜를 넣어줌

const Task = mongoose.model('Task',taskSchema);

module.exports = Task;
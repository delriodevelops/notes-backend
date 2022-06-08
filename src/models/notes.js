const mongoose = require('mongoose')

const noteSchema = mongoose.Schema({
    content:{
        type: String,
        required:true
    },
    date:{
        type:Date,
        required:true
    },
    important:{
        type:Boolean,
        required:true
    },
    completed:{
        type:Boolean,
        required:true
    }
});

module.exports = mongoose.model('note',noteSchema);
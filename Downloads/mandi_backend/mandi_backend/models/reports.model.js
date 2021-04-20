const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const reportSchema=new Schema({
    users:{
        type:Array,
        required:true
    },
    marketID:{
        type:String,
        required:true
    },
    marketName:{
        type:String,
        required:true
    },
    cmdtyID:{
        type:String,
        required:true
    },
    marketType:{
        type:String,
        required:true
    },
    cmdtyName:{
        type:String,
        required:true
    },
    priceUnit:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
},
{
    timestamps:true,
});

const Report=mongoose.model('report',reportSchema);
module.exports=Report;
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const kebabSchema = new Schema({
    shopName: {
        type: String
    },
    picture: {
        type:String
    },
    review: {
        type: Number
    },
    address: {
        type: String
    },
    coord: [{
        long: Number,
        lat: Number,
    }],
    comments: [{ 
        title: String,
        body: String, 
        date: Date 
    }],

})

const Kebab = mongoose.model('Kebab', kebabSchema)
module.exports = Kebab 
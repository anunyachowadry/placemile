const mongoose = require('mongoose')
const ObjectID = mongoose.Schema.Types.ObjectId

const CartSchema = new mongoose.Schema({
 
    Name:{
        type:String,
        required:true
    },
   
    Quantity:{
        type:Number,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    image:{
        type:String,
        required:true,
        
    },
    Totalprice:{
        type:String,
        required:true
    },
    productId:{
        type:String,
        required:true,
        
    }

})

const Cart = mongoose.model('Cart',CartSchema)

module.exports= Cart
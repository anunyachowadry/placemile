const mongoose = require('mongoose');

const subObj = mongoose.Schema({
      // Firstname:{type:String, required:true},
      // Lastname:{type:String, required:true},
      // PhoneNumber:{type: String, required:true},
      // Pincode:{type:String, required:true},
      // Email:{type:String,required:true},
      // City:{type:String,required:true},
      // State:{type:String,required:true},
      // Address:{type:String,required:true},
      name: { type: String, required:true}, //required: true },
	qnt: {type: Number, required:true}, //required: true},
      price: { type: Number, required:true},
      imgurl:{type: String},
       grandtotal:{type:Number,required:true},
       Totalprice:{type:Number,required:true},
      prodId:{type:String,required:true}
	//required: true }
       })

    //    const address = mongoose.Schema({
    //         Streetname:{type:String, required:true},
    //         City:{type:String, required:true},
    //         Country:{type: String, required:true},
    //          ZIP: {type: Number, required:true}
    //   })
       

const orderSchema = mongoose.Schema({
       _id: mongoose.Schema.Types.ObjectId,
//      name: { type: String, required:true}, //required: true },
// 	qnt: {type: String, required:true}, //required: true},
//       price: { type: String, required:true},
//       imgurl:{type: String},
//       //  //grandtotal:{type:Number,required:true},
//       // //  Totalprice:{type:Number,required:true},
//       prodId:{type:String,required:true},
     Firstname:{type:String, required:true},
      Lastname:{type:String, required:true},
      PhoneNumber:{type: String, required:true},
      Pincode:{type:String, required:true},
      Email:{type:String,required:true},
      City:{type:String,required:true},
      State:{type:String,required:true},
      Address:{type:String,required:true},

    
       OrderItems: [subObj],
      //  OrderStatus:{type: String, required:true},
      //  OrderDate:{type: String, required: true},
    //   /*  TotalAmount:{type: String, reqired: true}, */
      //  OrderId:{type: String, reqired: true},
       
       
}, {
      timestamps: true
});

   
module.exports = mongoose.model('Order', orderSchema);
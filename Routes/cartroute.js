const express = require('express');

const Cart= require('../Models/cart'); // requiring order schema

const router = new express.Router()



router.post('/postcart',(req,res,next)=>{
    const cart = new Cart(req.body) //we are utilizing schema here
    cart.save()                       // saving the schema
    .then(result => {                  // async tasks 
        res.status (201).json({
            message: "cart created" ,
            createdcart: cart
            
        })
    })
    .catch(error => {                   //catch is for throwing errors
        res.status(400).json({Error: error})
    })

});

    router.get('/carts', async(req, res) => {      
        try {
            const cart = await Cart.find({})  // get all products
            res.status(200).json({
                Totalcarts:cart.length,cart    // length of the schema we 've taken
            })
        } catch (error) {                          // catch is for throwing errors
            res.status(401).send(error)
        }
    });

   
    router.delete('/carts/:id' ,async(req,res)=> {
        try{
            const deletedcart = await Cart.findByIdAndDelete ( {_id:req.params.id} )
            if(!deletedcart) { //if it is empty it will throw error as response
                res.status(404).json({error: 'cart not found'})
    
            }
            res.status(400).json({message: "cart Deleted",
            deletedcart})
        } catch (error) {
            res.status(400).send (error)
        }
        
    })


    module.exports=router
const express =  require ('express')
const mongoose= require('mongoose')
const bodyparser = require('body-parser')
 cors=require('cors')

const orderRoute= require('./Routes/orderroute')
const cartRoute= require('./Routes/cartroute')
//const detailsRouter= require('./Routes/detailsrouter')
//const userRouter = require('./routes/userrouter')

const app = express()


mongoose.connect('mongodb+srv://anunyaanu:anunyachow123@cluster0.ipbfqc7.mongodb.net/?retryWrites=true&w=majority')

app.use((req,res,next) =>{

    res.header('Access-Control-Allow-Origin' , '*');
    res.header('Access-Control-Allow-Header' ,'Origin, X-Requested-With ,Content-Type,Accept,Autherization');
    if(req.method == 'Options'){
        res.header('Access-Control-Allow-Origin' , 'PUT,POST,GET,DELETE,PATCH');
        return res.status(200).json({});
    }
next();  // it will run or execute after middleware function is finished
});

app.use(bodyparser.urlencoded({extended: false})); //middleware of parsing bodies from URL
app.use(bodyparser.json()); //middleware for parsing json objects
app.use(cors())
 
//app.use('/userRouter',userRouter)
//app.use('/itemRouter',itemRouter)
app.use('/orderRoute',orderRoute)
app.use('/cartRoute',cartRoute)
//app.use('/detailsRouter',detailsRouter)
//app.use(cartRouter)

module.exports = app;

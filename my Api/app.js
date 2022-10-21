const express=require('express');
const router=require('./src/routes/api')
const app=express();

//Security MiddleWare:-

const rateLimit=require('express-rate-limit');
const helmet=require('helmet');
const mongoSanitize=require('express-mongo-sanitize');
const xss=require('xss')
const hpp=require('hpp');
const cors=require('cors');

//Security Implement:-

app.use(cors());
app.use(hpp());
app.use(xss());
app.use(mongoSanitize());
app.use(helmet());


//Request Rate Limiting:-

const limiter=rateLimit({
  windowMs:15*60*1000,
  max:100
})
app.use(limiter())





app.use("/api/v1",router);

//undifined Route:-

app.use('*',(req,res)=>{

      res.status(404).json({status:"Fail",data:"Not Found"})
})

module.exports=app;
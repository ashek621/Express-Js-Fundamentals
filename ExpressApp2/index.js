//GET Request:-

//Simple get request:

// var express=require('express');
//
// app=express();
//
// app.get("/",function (req,res){
//
//     res.send("This is simple get request!")
// })
//
// app.listen(4000,function (){
//     console.log("Server Run Success!")
// })

//simple get request with URl parameter:-

// var express=require('express');
//
// app=express();
//
// app.get("/",function (req,res){
//
//           let firstName= req.query.firstName;
//           let lastName = req.query.lastName;
//
//           res.send(firstName+"="+lastName)
//
// })
//
// app.listen(4000,function (){
//     console.log("Server Run Success!")
// })

//Catch Request Header Simple Get Method:-

// var express=require('express');
//
// app=express();
//
// app.get("/",function (req,res){
//
//
//    let username=req.header("userName")
//     let password=req.header("password")
//
//     res.send(username+"="+password)
//
// })
//
// app.listen(4000,function () {
//     console.log("Server Run Success!")
// })

//Post Request:-

//Simple Post Request:-

// var express=require('express');
//
// app=express();
//
// app.post("/",function (req,res){
//
//
//     res.send("This is Simple Post Request")
//
// })
//
// app.listen(4000,function () {
//     console.log("Server Run Success!")
// })

//Post Request With URL Parameter:-

// var express=require('express');
//
// app=express();
//
// app.post("/",function (req,res){
//
//
//            let username= req.query.UserName
//            let password= req.query.Password
//
//             res.send(username+":"+password)
//
//
// })
//
// app.listen(4000,function () {
//     console.log("Server Run Success!")
// })

//url Postman: http://localhost:4000/?UserName=Kazi Ashek&Password=12345678910


//Post Request Header:-

// var express=require('express');
//
// app=express();
//
// app.post("/",function (req,res){
//
//
//     let userid= req.header('UserId')
//     let number= req.header('Number')
//
//     res.send(userid+"="+number)
//
//
// })
//
// app.listen(4000,function () {
//     console.log("Server Run Success!")
// })


//Post Request JSON Body:-

// var express=require('express');
// var bodyparser=require('body-parser')
//
// app=express();
// app.use(bodyparser.json())
//
// app.post("/",function (req,res){
//
//     let JsonData=req.body;
//     res.send(JSON.stringify(JsonData))
// })
//
// app.listen(4000,function (){
//     console.log("Server Run Success")
// })

//Sfecific post json DAta:-

// var express=require('express');
// var bodyparser=require('body-parser')
//
// app=express();
// app.use(bodyparser.json())
//
// app.post("/",function (req,res){
//
//     let JsonData=req.body;
//
//    let name= (JsonData['name']);
//    let roll= (JsonData.Roll);
//    let clg= (JsonData.College);
//
//    res.send(name+roll+clg)
// })
//
// app.listen(4000,function (){
//     console.log("Server Run Success")
// })

//Request MultiFormData:-

// var express=require('express');
// var multer=require('multer')
//
// app=express();
// multer=multer();
//
// app.use(multer.array())
// app.use(express.static('public'));
//
//
//
// app.post("/",function (req,res){
//
//             let jsondata=req.body;
//             res.send(JSON.stringify(jsondata))
// })
//
// app.listen(4000,function (){
//     console.log("Server Run Success")
// })


//file upload:-

// var express=require('express');
// var multer=require('multer')
//
// app=express();
//
// var storage=multer.diskStorage({
//     destination:function (req,file,callback){
//         callback(null,"./uploads")
//     },
//     filename:function (req,file,callback){
//         callback(null,file.originalname)
//     }
// })
//
// var upload= multer({storage:storage}).single('myfile')
//
//
// app.post("/",function (req,res){
//
//     upload(req,res,function (error){
//         if(error){
//             console.log("File Upload Fail")
//         }
//         else {
//             console.log("File upload Success")
//         }
//     })
//
// })
//
// app.listen(4000,function (){
//     console.log("Server Run Success")
// })
//


//middle ware:

//application level middele ware:


// var express=require('express');
//
// app=express();
//
// app.use(function (req, res, next){
//
//     console.log("I am application level middle ware")
//     next();
// })
//
// app.get("/",function (req,res){
//
//     res.send("This is home page")
// })
//
// app.get("/about",function (req,res){
//
//     res.send("This is about page")
// })
//
// app.get("/contact",function (req,res){
//
//     res.send("This is contact page")
// })
//
// app.listen(4000,function (){
//     console.log("Server Run Success!")
// })


//Route level middle ware:-

var express=require('express');

app=express();

app.use("/contact",function (req, res, next){

    console.log("I am contact middle ware")
    next();
})


app.get("/contact",function (req,res){

    res.send("This is contact page")
})

app.listen(4000,function (){
    console.log("Server Run Success!")
})


































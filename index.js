
//My First Express Js Software:-

// var express=require('express');
//
// app=express();
//
// app.get("/one",function (req,res){
//     res.send("My Name is KAzi Ashek")
// })
//
// app.get("/two",function (req,res){
//     res.end("My Home Town is Noakahli,BanglaDesh")
// })
//
// app.listen(5000,function (){
//     console.log("Server Run Success!!")
// })

//Express Js Routing:-

// var express=require('express');
//
// app=express();
//
// app.get("/",function (req,res){
//
//     res.end('This Is Home Page')
//
// })
//
//
// app.post("/about",function (req,res){
//
//     res.end('This Is About Page')
//
// })
// app.put("/contact",function (req,res){
//
//     res.end('This Is Contact Page')
//
// })
//
//
// app.delete("/service",function (req,res){
//
//     res.end('This Is Service Page')
//
// })
//
// app.listen(8000,function (){
//     console.log("Server Run Success!")
// })

//Simple String Response:-

// var express=require('express');
//
// app=express();
//
// app.get("/one", function (req,res){
//
//     res.send("Home Page")
//
// })
//
// app.get("/two", function (req,res){
//
//     res.send("About Page")
//
// })
//
// app.get("/three", function (req,res){
//
//     res.send("Service Page")
//
// })
//
// app.listen(4000,function (){
//     console.log("SerVer Created Success!")
// })


//Simple Response Status Code:-

// var express=require('express');
//
// app=express();
//
// app.get("/one", function (req,res){
//
//     res.status(401).end("Unotho...")
//
// })
//
//
// app.listen(4000,function (){
//     console.log("SerVer Created Success!")
// })
//

// JSON Response:-

// var express=require('express');
//
// app=express();
//
// let MyJson=[
//
//     {
//         name:"Rabbil Hasan",
//         city:"Dhaka",
//         age:"30Years Old"
//     },
//     {
//         name:"Kazi Ashek",
//         city:"Noakhali",
//         age:"23Years Old"
//     },
//     {
//         name:"Faisal Ahmed",
//         city:"Dhaka",
//         age:"50Years Old"
//     },
// ]
//
// app.get("/one", function (req,res){
//
//             res.json(MyJson)
//
// })
//
//
// app.listen(4000,function (){
//     console.log("SerVer Created Success!")
// })
//

//Response Download:-

// var express=require('express');
//
// app=express()
//
// app.get("/one",function (req,res){
//
//     res.download("./picture/ashek.jpg");
// })
//
// app.listen(5000,function (){
//     console.log("Server Created Success!!")
// })
//

//Response ReDirect:-

// var express=require('express');
//
// app=express();
//
// app.get("/BD",function (req,res){
//
//     res.redirect("http://localhost:5000/IN")
// })
// app.get("/IN",function (req,res) {
//     res.send("INdia is a bla bla");
// })
//
// app.listen(5000,function (){
//     console.log("Server Create Success!")
// })

//Rsponse Header:-
//

// var express=require('express');
//
// app=express();
//
// app.get("/BD",function (req,res){
//
//     res.append("name","Kazi Ashek")
//     res.append("city","Noakhali")
//     res.append("age","22years old")
//     res.status(404).end("Response Header Impliment Success!")
//
// })
//
//
// app.listen(8000,function (){
//     console.log("Server Create Success!")
// })
//

//Response Set Cookies:*-
//
// var express=require('express');
//
// app=express();
//
// app.get("/BD",function (req,res){
//
//     res.cookie("name","Rabbil Hasan")
//     res.cookie("city","Dhaka")
//     res.cookie("age","Twoenty Tow Years")
//
//     res.end("Cookies set Success!")
//
// })
//
//
// app.listen(8000,function (){
//     console.log("Server Create Success!")
// })

//Response Clear Cookies:-

// var express=require('express');
//
// app=express();
//
// app.get("/BD",function (req,res){
//
//     res.clearCookie("name",)
//     res.clearCookie("city",)
//     res.clearCookie("age",)
//
//     res.end("Cookies Clear Success!")
//
// })
//
//
// app.listen(8000,function (){
//     console.log("Server Create Success!")
// })
//



















































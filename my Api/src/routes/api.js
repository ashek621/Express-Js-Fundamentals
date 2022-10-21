const express=require('express');
const router=express.Router();
const controllers=require('../controllers/controllers')

router.get("/hello-get",controllers.Hello)

router.post("/hello-post",controllers.Hello)

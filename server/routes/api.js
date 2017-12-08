// const User=require('../models/user');
const mongoose=require('mongoose');
const express=require('express');
var multer  = require('multer');
var upload = multer({ dest: 'uploads/' });
// const jwt=require('jsonwebtoken');
const router=express.Router();
// const secret=require('crypto').randomBytes(256).toString('hex');
// const Blog=require('../models/blog');



const db="mongodb://localhost:27017/file-uploading";
mongoose.Promise=global.Promise;

mongoose.connect(db,(err)=>{
    if(err){
        console.log("Error !"+err);
    }
});

var storage = multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, 'uploads/')
    },
    filename: function (req, file, cb) {
      cb(null, file.fieldname + '-' + Date.now()+ '.jpg')
    }
})
  
var upload = multer({ storage: storage }).single('file');

router.post('/', function (req, res) {
    console.log('in back');
    upload(req, res, function (err) {
      if (err) {
          console.log(err);
        res.json({success:false, message:err});
      }else{
          console.log('file up');
          res.json({success:true,message:'File Uploaded !'});
      }
    })
})
module.exports=router;
var express=require('express'); //in parameter name of the library is defined
var bodyParser=require('body-parser');
var mongo=require('mongodb').MongoClient;
var database;
var app=express();
var mongoose=require('mongoose');

var Message =mongoose.model('Message',{
    msg:String
});


//var Message=require('./models/message');
//var Message=require('./models/user');

app.use(bodyParser.json());

app.use(function(req,res,next){
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Content-Type, Authorization");
    next();
    
})


// "/api/message" is a location and second is a cal back function

app.get('/api/message',GetMessages);

app.post('/api/message', function(req, res){
    console.log(req.body);
    var message=new Message(req.body)
    message.save();
    res.status(200);
    // res status 200 is user for ok
})


function GetMessages(req, res){
    Message.find({}).exec(function(err, result){
        res.send(result);
    })
}
    

mongoose.connect("mongodb://localhost:27017/test", function(err, db){
    if(!err){
        console.log("connection ok");
    }
})


var server=app.listen(5000, function(){
    console.log('Server started on port 5000');
})

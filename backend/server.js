var express=require('express'); //in parameter name of the library is defined
var app=express();
var bodyParser=require('body-parser');
app.use(bodyParser.json());

app.post('/api/message', function(req, res){
    console.log(req.body);
    res.status(200);
})

var server=app.listen(5000, function(){
    console.log('Server started on port 5000');
})

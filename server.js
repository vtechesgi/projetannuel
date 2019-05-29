const express = require('express')
const app = express();
var port = process.env.PORT;
var mongoose = require('mongoose');
const config = require('./config');
const morgan = require('morgan');
const RouteBuilder = require('./routes');

//mongoose.connect("mongodb://guigui:guigui@cluster0-shard-00-00-nod1t.mongodb.net:27017,cluster0-shard-00-01-nod1t.mongodb.net:27017,cluster0-shard-00-02-nod1t.mongodb.net:27017/test?ssl=true&replicaSet=Cluster0-shard-0&authSource=admin&retryWrites=true"

mongoose.connect(config.database , {useNewUrlParser: true},function(err,result){
    if(result){
        console.log("connected");
    }
    if(err){
        console.log("not connected");
        throw(err);
        
    }
});
app.use(function(req,res,next){
    res.header('Access-Control-Allow-Origin','*');
    res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE');
    res.header('Access-Control-Allow-Headers','Content-Type');
    next();
})
app.set('superSecret', config.secret);
app.use(morgan('dev'));
RouteBuilder.build(app);

app.listen(port, () => console.log(`Listening ${port}...`));
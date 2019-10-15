// connection to the mongodb database
const mongoose =require('mongoose');
mongoose.connect('mongodb+srv://:@cluster0-oiy9s.mongodb.net:27017/employee',{userNewUrlParser:true},(err)=>{
    if(!err){
        console.log("connected");
    }else{
        console.log('error'+err);
    }
}); 
//require the model of the employee collection in the database
require('./employee.model');
const employeeController=require('./controller/controller');
const express =require('express');
const path =require('path');
const exphbs=require('express-handlebars');
const bodyparser=require('body-parser');

var app= express();

app.use(bodyparser.urlencoded({
    extended:true
}));
app.use(bodyparser.json());
app.use('/employee',employeeController);
// expresshbs middleware template engine
app.set('views',path.join(__dirname,'/views/'));
//views/layout for main.hbs 
app.engine('hbs',exphbs({
    extname:'hbs',
    defaultLayout:'mainLayout',
    layoutsDir:__dirname+'/views/layouts/'

}));
// setting express hbs as view engine
app.set('view engine','hbs');
//listen to port 3000
app.listen(3000,()=>{
        console.log('express on port 3000');
    });


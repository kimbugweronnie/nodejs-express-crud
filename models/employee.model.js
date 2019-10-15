const mongoose= require('mongoose');
// creating employee schema
var employeeSchema =new mongoose.Schema({
    // employee document...doc
    fullName:{
        type:String
        required:"this is required"
    },email:{
        type:String
    },
    mobile:{
        type:String
    },city:{
        type:String
    }
});
// registering the Employee schema to mongoose
mongoose.model('Employee',employeeSchema);
// Employee',is the name of the schema
// employeeSchema is the name of the schema object
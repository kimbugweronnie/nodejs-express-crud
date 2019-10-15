const express = require("express");
var router= express.Router();
const mongoose= require('mongoose');
const Employee=mongoose.model('Employee');
// CRUD operations
router.get("/", (req,res)=>{
   
    res.render('employee/andEdit',{
        viewTitle:"My Information"
    });
});

router.post('/',(req,res)=>{
   if(req.body.id==""){
insertdata(req,res);
   }
else{
    updateRecord(req,res);

}
    
    });
function insertdata(req,res){
    var employee=new Employee();
    employee.fullName=req.body.fullName;
    employee.email=req.body.email;
    employee.mobile=req.body.mobile;
    employee.city=req.body.city;
    employee.save((err,doc)=>{
        if(!err){
            res.redirect('employee/list');
        }else{
            console.log("error" +err);
    })
};
}
router.get('/delete/:id',(req,res)=>{
    Employee.findByAndRemove(req.params.id,(err,doc)=>{
        if(!err){
            res.redirect('employee/list');
        }else{
            console.log("error" +err);
    })
})

});
function updateRecord(req,res) {
    Employee.findOneAndUpdate(
        {id:req.body.id,
        req.body,
        {new:true},
        (err,doc)=>{
            if(!err){
                res.redirect('employee/list');

            }else{
                console.log("the err is "+err);
            }
        });
        }


    )
    
},
router.get('/list',(req,res)=>{
    //res.json('the list is here');
    Employee.find(err,docs)=>{
        if(!err){
            res.render("employee/list",{
                list:docs

            });
        }
        else{
            console.log("error" +err);
        }
            

    });
router.get('/:id',(req,res)=>{
    Employee.findById(req.params.id,(err,doc)=>{
        if(!err){
            res.render("employee/addEdit",{
                viewTitle:"Update Employee",
                employee:doc
            });

        }
    }
}
});
//exporting the router object
 module.exports=router;
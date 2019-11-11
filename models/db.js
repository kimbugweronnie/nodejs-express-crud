const mongoose = require("mongoose");
mongoose.connect(
  "mongodb://localhost:27017/EmployeeDB",
  { userNewUrlParser: true },
  err => {
    if (!err) {
      console.log("connected TO MONGO ");
    } else {
      console.log("error" + err);
    }
  }
);
//require the model of the employee collection in the database
require("./employee.model");

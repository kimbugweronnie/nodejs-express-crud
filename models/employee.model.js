const mongoose = require("mongoose");
// creating employee schema
var employeeSchema = new mongoose.Schema({
  // employee document...doc
  fullName: {
    type: String,
    required: "this is required"
  },
  email: {
    type: String,
    required: "this is required"
  },
  mobile: {
    type: String,
    required: "this is required"
  },
  city: {
    type: String
  }
});
// registering the Employee schema to mongoose
mongoose.model("employees", employeeSchema);
// employee',is the name of the collection
// employeeSchema is the name of the schema object

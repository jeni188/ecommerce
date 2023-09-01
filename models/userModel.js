const mongoose = require("mongoose");
const schema = mongoose.Schema;
const userSchema = new schema(
    {
        name:{
            type : String,
            required : true,
            trim : true,
            min : 3,
            max : 20, 
        },
        email:{
            type:String,
            required:true,
            trim:true,
            unique:true,
            lowecase:true,
        },
        password:{
            type:String,
            required:true,
        },
        role:{
            type: String,
            enum:["user","admin"],
            default:"user",

        },
        age:{
            type:Number
        },
        contactNumber:{
            type:String,
        },
        // profilePicture:{
        //     type:String,
        // },
    },
    {timestamps:true}
);
module.exports = mongoose.model("user",userSchema);
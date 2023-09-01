const mongoose = require("mongoose");
const schema = mongoose.Schema;
const productSchema = new schema(
    {
        name:{
            type : String,
            required : true,
            trim : true,
            min : 3,
            max : 20, 
            unique:true
        },
        categories:{
            type:String,
            required:true,
            trim:true,
            lowecase:true,
        },
        price:{
            type:String,
            
        },
        details:{
            type: String,
            trim: true,
            min:3


    //     },
    //     age:{
    //         type:Number
    //     },
    //     contactNumber:{
    //         type:String,
    //     },
    //     // profilePicture:{
    //     //     type:String,
    //     // },
        },
    },
     {timestamps:true}
);
module.exports = mongoose.model("product",productSchema);
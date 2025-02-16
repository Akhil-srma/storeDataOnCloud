import mongoose from "mongoose";

import {Schema} from "mongoose";

const personSchema=new  Schema({
    email:{
        type:String,
        require: true
    }
})

export default mongoose.model("person",personSchema);
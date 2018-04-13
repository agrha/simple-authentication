const mongoose = require('mongoose')
const Schema = mongoose.Schema


const userSchema = new Schema ({
  email:{
    type: String,
    required:[true,'cant be empty']
  },
  username:{
    type:String,
    required:[true,'cant be empty']
  },
  password:String
})

module.exports = mongoose.model('Users',userSchema)
const jwt = require ('jsonwebtoken')
const userSchema = require('../models/user.model')
const bcrypt = require ('bcrypt')
const salt = bcrypt.genSaltSync(10)

class User {
  static signup(req,res){
    let password = bcrypt.hashSync(req.body.password,salt)
    let user = {
      email: req.body.email,
      username: req.body.username,
      password:password
      }
    userSchema.create(user)
    .then(user=>{
      res.status(200).json({
        message:'user created',
        user
      })
    })
    .catch(err=>{
      res.status(500).json({
        message:'something went wrong',
        err
      })
    })
  }

  static signin(req,res){
    let target = {
      email:req.body.email
    }
    userSchema.findOne(target)
    .then(user=>{
      if(user){
        let clarify = bcrypt.compareSync(req.body.password,user.password)
        if(clarify){
          let payload = {
            _id:user._id,
            name:user.username,
            role:user.role
          }
          jwt.sign(payload,'secret key',(err,token)=>{
            if(err){
              res.status(500).json({
                message:'something went wrong',
                err
              })
            } else {
              res.status(200).json({
                message:'berhasil signin',
                token:token,
                id:payload._id,
                role:payload.role,
                username:payload.name
              })
            }
          })
        } else {
          res.status(403).json({
            message:'your password is wrong'
          })
        }
      } else {
        res.status(500).json({
          message:'user is not found'
        })
      }
    })
  }
}

module.exports = User
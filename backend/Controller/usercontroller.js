import User from "../model/user.model.js";
import bcrypt from "bcryptjs"
export const signup = async(req,res)=>{
    try{
      const {fullname,email,password}=req.body
     console.log(req.body)
      const user1 = await User.findOne({email})

      if(user1){
        return res.status(400).json({msg:"user already exits"})
      }
     const hashpassword = await bcrypt.hash(password,10)
      const user = new User({
       fullname:fullname,
       email:email,
       password:hashpassword
      })
     await  user.save()
      res.status(201).json({msg:"user created successfully",user})
    }
    catch(error){
        console.log(error,'error')
        res.status(500).json({msg:"internal server  error"})
    }
}


export const login =async (req,res)=>{
   try{
   const {email,password}=req.body;
   const user = await User.findOne({email});
   const ismatch = await  bcrypt.compare(password,user.password)
   if(!user || !ismatch){
    return res.status(400).json({msg:"invalid user or password"})
   }else{
   return res.status(200).json({msg:"login successful",user:{
_id:user._id,
fullname:user.fullname,
email:user.email,
password:user.password
   }})
   }
   }catch(err){
    console.log(err,'error')
res.status(500).json({msg:"internal server error"})
   }
}
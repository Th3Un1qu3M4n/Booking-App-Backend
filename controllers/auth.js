import bcrypt from "bcryptjs";
import User from "../models/User.js"
import Createerror from "../utils/error.js"
import jwt from "jsonwebtoken"

export const registeruser = async (req,res,next) =>{
    try {

        const salt = bcrypt.genSaltSync(10);
        const hash = bcrypt.hashSync(req.body.password , salt);


        const newUser = new User({username: req.body.username, email: req.body.username , password: hash })
       await newUser.save();
       res.status(201).send("user created")
    } catch (error) {
        console.log(error)
       return next(Createerror(300, "Error is Occured!"))
    }
}
export const Loginuser = async (req,res,next) =>{
    console.log("Request received")
    try {
         const user = await User.findOne({username:req.body.username})
        if(!user){
           return next(Createerror(404, "User not found"))

        }
        const isPassword = await bcrypt.compare(req.body.password , user.password);

        if(!isPassword){
        return next(Createerror(400, "wrong password or username"))
        }

        const token = jwt.sign({id:user._id, isAdmin:user.isAdmin}, process.env.JWT)


       res.cookie("access_token", token, {httpOnly: true}).status(201).send("user Authenticated!")
    } catch (error) {
        console.log(error)
        return next(Createerror(300, "Error is Occured!"))
    }
}

// export const updateadmin = async (req,res,next) =>{
//     try {
//         const Updatedadmin =  await User.findByIdAndUpdate(req.params.id, {$set: {isAdmin: true}}, {new:true})
//         res.status(201).send(Updatedadmin);

        
//     } catch (error) {
//         next(Createerror(300, "Error is Occured!"))
//     }
// }
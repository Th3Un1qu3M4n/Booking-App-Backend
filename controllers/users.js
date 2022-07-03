
import Createerror from "../utils/error.js"
import User from "../models/User.js";

export const createUser  = async(req,res,next)=>{

    const UserModal = new User(req.body)
    
    try {
       const UserSave =  await UserModal.save()
       res.status(200).json(UserSave)
    } catch (error) {
        // console.log(error)
        next(Createerror(300, "Error is Occured!"))
    }
}

export const updateUser = async(req,res,next)=>{


    try {
       const UpdatedUsersave =  await User.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true})
       res.status(200).json(UpdatedUsersave)
    } catch (error) {
        next(Createerror(300, "Error is Occured!"))
    }
}

export const deleteUser = async(req,res,next)=>{


    try {
       await User.findByIdAndRemove(req.params.id)
       res.status(200).json("Data has been deleted!")
    } catch (error) {
        next(Createerror(300, "Error is Occured!"))
        // console.log(error)
        // res.send(error)
    }
}


export const getUser = async(req,res,next)=>{

    try {
       const FindUser =  await User.findById(req.params.id)
       res.status(200).json(FindUser)
    } catch (error) {
        next(Createerror(300, "Error is Occured!"))
    }
}


export const getAll = async(req,res,next)=>{

    try {
       const FindUser =  await User.find();
       res.status(200).json(FindUser)
    } catch (error) {
        next(Createerror(300, "Error is Occured!"))
    }
}

import Createerror from "../utils/error.js"
import Hotel from "../models/User.js";

export const createHotel  = async(req,res,next)=>{

    const hotelmodal = new Hotel(req.body)

    try {
       const hotelsave =  await hotelmodal.save()
       res.status(200).json(hotelsave)
    } catch (error) {
        // console.log(error)
        next(Createerror(300, "Error is Occured!"))
    }
}

export const updateHotel = async(req,res,next)=>{


    try {
       const Updatedhotelsave =  await Hotel.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true})
       res.status(200).json(Updatedhotelsave)
    } catch (error) {
        next(Createerror(300, "Error is Occured!"))
    }
}

export const deleteHotel = async(req,res,next)=>{


    try {
       await Hotel.findByIdAndRemove(req.params.id)
       res.status(200).json("Data has been deleted!")
    } catch (error) {
        next(Createerror(300, "Error is Occured!"))
        // console.log(error)
        // res.send(error)
    }
}


export const getHotel = async(req,res,next)=>{

    try {
       const Findhotel =  await Hotel.findById(req.params.id)
       res.status(200).json(Findhotel)
    } catch (error) {
        next(Createerror(300, "Error is Occured!"))
    }
}


export const getAll = async(req,res,next)=>{

    try {
       const Findhotel =  await Hotel.find();
       res.status(200).json(Findhotel)
    } catch (error) {
        next(Createerror(300, "Error is Occured!"))
    }
}
import Createerror from "../utils/error.js"
import Hotel from "../models/Hotel.js"
import Room from "../models/Room.js";


export const createRoom  = async(req,res,next)=>{

    console.log("creatingRoom")
    const Hotelid = req.params.Hotelid;
    const Roommodal = new Room(req.body);

    try {
       const Roomsave =  await Roommodal.save()
        try {
            await Hotel.findByIdAndUpdate(Hotelid, {$push: {room: Roomsave._id}})
        } catch (error) {
            
        }



       res.status(200).json(Roomsave)
    } catch (error) {
        next(Createerror(300, "Error is Occured!"))
    }
}

export const updateRoom = async(req,res,next)=>{


    try {
       const UpdatedRoomsave =  await Room.findByIdAndUpdate(req.params.id, {$set: req.body}, {new:true})
       res.status(200).json(UpdatedRoomsave)
    } catch (error) {
        next(Createerror(300, "Error is Occured!"))
    }
}

export const deleteRoom = async(req,res,next)=>{


    try {
       await Room.findByIdAndRemove(req.params.id)
       await Hotel.findByIdAndUpdate(req.params.Hotelid, {$pull: {room: req.params.id}})

       res.status(200).json("Room Data has been deleted!")
    } catch (error) {
        next(Createerror(300, "Error is Occured!")) 
    }
}


export const getRoom = async(req,res,next)=>{

    try {
       const FindRoom =  await Room.findById(req.params.id)
       res.status(200).json(FindRoom)
    } catch (error) {
        next(Createerror(300, "Error is Occured!"))
    }
}


export const getAll = async(req,res,next)=>{

    try {
       const FindRoom =  await Room.find();
       res.status(200).json(FindRoom)
       
    } catch (error) {
        next(Createerror(300, "Error is Occured!"))
    }
}
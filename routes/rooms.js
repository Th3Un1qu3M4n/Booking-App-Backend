import express from "express";
import { createRoom, updateRoom, deleteRoom, getRoom, getAll  } from "../controllers/Rooms.js";
import { verifyAdmin } from "../utils/verifyToken.js";



const router = express.Router();


//CREATE
router.post("/:Hotelid",verifyAdmin, createRoom);
// router.post("/:Hotelid", (req, res, next)=>{
//     res.send("Tetxting")
// });
//UPDATE

router.put("/:id", verifyAdmin, updateRoom);

//DELETE


router.delete("/:id/:Hotelid", verifyAdmin, deleteRoom);


//GET
router.get("/:id", getRoom)


//GETALL

router.get("/", getAll)

// router.get("/complains/:Roomid/:userid", async(req,res,next)=>{

//     try {
//        const FindRoom =  await Complain.find({Roomid: req.params.Roomid, userid : req.params.userid})
//        res.status(200).json(FindRoom)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })


export default router;
import express from "express";
import { createUser, updateUser, deleteUser, getUser, getAll  } from "../controllers/users.js";
import { verifyUser, verifyAdmin } from "../utils/verifyToken.js";


const router = express.Router();


//CREATE
router.post("/", createUser);
//UPDATE

router.put("/:id", verifyUser, updateUser);

//DELETE


router.delete("/:id", verifyUser, deleteUser);


//GET
router.get("/:id", verifyUser, getUser)


//GETALL

router.get("/", verifyAdmin, getAll)

// router.get("/complains/:Userid/:userid", async(req,res,next)=>{

//     try {
//        const FindUser =  await Complain.find({Userid: req.params.Userid, userid : req.params.userid})
//        res.status(200).json(FindUser)
//     } catch (error) {
//         res.status(500).json(error)
//     }
// })


export default router;
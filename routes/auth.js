
import {registeruser, Loginuser} from "../controllers/auth.js"
import express from "express";

const router = express.Router();

router.post("/register" , registeruser)
router.post("/login" , Loginuser)
// router.put("/updateadmin/:id" , updateadmin)

export default router;
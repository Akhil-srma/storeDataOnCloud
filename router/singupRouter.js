import express from'express';
const router=express.Router();
import {addUserEmail} from "../controller/singupController.js";

router.post("/addUserEmail",
    addUserEmail
);


export default router;
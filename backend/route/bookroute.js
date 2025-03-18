import express, { Router } from "express";
import { getBook } from "../Controller/controller.js";

const router = express.Router();

router.get('/',getBook)


export default router
import { Router } from "express";
import { createAdoption, getAdoptions } from "../controllers/adoption.controller.js";

const router = Router();

router.post("/", createAdoption);
router.get("/", getAdoptions);

export default router;
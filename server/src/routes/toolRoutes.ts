import { Router } from "express";
import { getTools, createTool } from "../controllers/toolController";

const router = Router();

router.get("/", getTools);
router.post("/", createTool);

export default router;

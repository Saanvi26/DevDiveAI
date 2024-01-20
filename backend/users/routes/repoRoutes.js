import express from "express";
const router = express.Router();
import { repoData, issueData } from "../controllers/repoController.js";

router.post("/repo", repoData);
router.post("/issue", issueData);
// router.post("/issue", issueData);

export default router;
import express from "express";
import { findConflictingParticipants } from "../controllers/meetingController.js";
const router = express.Router();

router.post("/conflicts", findConflictingParticipants);

export default router;

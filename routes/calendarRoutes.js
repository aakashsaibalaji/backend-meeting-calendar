import express from "express";
import {
  bookMeeting,
  getFreeSlots,
} from "../controllers/calendarController.js";
const router = express.Router();
router.post("/book-meeting", bookMeeting);
router.get("/free-slots", getFreeSlots);

export default router;

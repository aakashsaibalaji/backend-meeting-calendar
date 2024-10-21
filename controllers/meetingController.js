import MeetingService from "../services/meetingService.js";
import CalendarService from "../services/calendarService.js";
const { Meeting } = require("../models/meeting");

const meetingService = new MeetingService(CalendarService);

export const findConflictingParticipants = (req, res) => {
  const meeting = req.body;
  const conflictingParticipants =
    meetingService.findParticipantsWithConflicts(meeting);
  res.status(200).json(conflictingParticipants);
};

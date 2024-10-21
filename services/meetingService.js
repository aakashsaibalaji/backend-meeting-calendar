class MeetingService {
  constructor(calendarService) {
    this.calendarService = calendarService;
  }

  findParticipantsWithConflicts(meeting) {
    return meeting.participants.filter((participant) => {
      return this.calendarService.hasMeetingConflict(participant, meeting);
    });
  }
}

export default MeetingService;

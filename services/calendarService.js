import moment from "moment";

class CalendarService {
  bookMeeting(owner, meeting) {
    if (this.hasMeetingConflict(owner, meeting)) {
      throw new Error("Meeting conflict with owner's schedule.");
    }
    owner.calendar.addMeeting(meeting);
  }

  findFreeSlots(emp1, emp2, duration) {
    const meetings1 = emp1.calendar.getMeetings();
    const meetings2 = emp2.calendar.getMeetings();
    const freeSlots = [];

    const allMeetings = [...meetings1, ...meetings2].sort(
      (a, b) => a.startTime - b.startTime
    );

    let startOfDay = moment().startOf("day");
    let endOfDay = moment().endOf("day");

    let lastEndTime = startOfDay;

    allMeetings.forEach((meeting) => {
      const meetingStart = moment(meeting.startTime);
      if (meetingStart.isAfter(lastEndTime)) {
        const slotDuration = meetingStart.diff(lastEndTime, "minutes");
        if (slotDuration >= duration) {
          freeSlots.push(lastEndTime.format(), meetingStart.format());
        }
      }
      lastEndTime = moment.max(lastEndTime, moment(meeting.endTime));
    });

    if (lastEndTime.isBefore(endOfDay)) {
      freeSlots.push(lastEndTime.format(), endOfDay.format());
    }

    return freeSlots;
  }

  hasMeetingConflict(employee, newMeeting) {
    return employee.calendar.getMeetings().some((meeting) => {
      return this.isOverlapping(meeting, newMeeting);
    });
  }

  isOverlapping(m1, m2) {
    return (
      moment(m1.startTime).isBefore(m2.endTime) &&
      moment(m2.startTime).isBefore(m1.endTime)
    );
  }
}

export default new CalendarService();

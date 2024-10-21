class Employee {
  constructor(id, name) {
    (this.id = id), (this.name = name);
  }
}

class Calendar {
  constructor() {
    this.meeting = [];
  }

  addMeeting(meeting) {
    this.meeting.push(meeting);
  }

  removeMeeting(meeting) {
    this.meeting = this.meeting.filter((m) => m.id !== meeting.id);
  }

  getMeeting(meeting) {
    return this.meeting.find((m) => m.id === meeting.id);
  }

  updateMeeting(meeting) {
    this.meeting = this.meeting.find((m) => {
      if (m.id === meeting.id) {
        m = meeting;
      }
    });
  }
}

export default { Employee, Calendar };

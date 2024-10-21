class meeting {
  constructor(id, topic, startTime, endTime, participants) {
    this.id = id;
    (this.topic = topic),
      (this.startTime = startTime),
      (this.endTime = endTime),
      (this.participants = participants);
  }
}

export default meeting;

import CalendarService from "../services/calendarService.js";
import Employee from "../models/employee.js";

const employees = {};

const addEmployee = (id, name) => {
  employees[id] = new Employee(id, name);
};

export const bookMeeting = (req, res) => {
  const { ownerId, meeting } = req.body;
  const owner = employees[ownerId];

  if (!owner) {
    return res.status(404).send("Owner not found.");
  }

  try {
    CalendarService.bookMeeting(owner, meeting);
    res.status(200).send("Meeting booked successfully!");
  } catch (error) {
    res.status(400).send(error.message);
  }
};

export const getFreeSlots = (req, res) => {
  const { emp1Id, emp2Id, duration } = req.query;
  const emp1 = employees[emp1Id];
  const emp2 = employees[emp2Id];

  if (!emp1 || !emp2) {
    return res.status(404).send("One or both employees not found.");
  }

  const freeSlots = CalendarService.findFreeSlots(
    emp1,
    emp2,
    parseInt(duration)
  );
  res.status(200).json(freeSlots);
};

//we can test with this sample data.
addEmployee("1", "John");
addEmployee("2", "Jane");

import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import calendarRoutes from "./routes/calendarRoutes.js";
import meetingRoutes from "./routes/meetingRoutes.js";
dotenv.config();
const app = express();
app.use(cors());

app.use(bodyParser.json());
app.use("/api/calendar", calendarRoutes);
app.use("/api/meeting", meetingRoutes);

app.listen(5500, () => {
  console.log("Server has Started Running on htttp://localhost:5500");
});

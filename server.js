import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoutes.js";
import subscriptionRoutes from "./routes/subscriptionRoutes.js";
import { subscriptionReminderJob } from "./utils/subscriptionReminder.js";



dotenv.config();
connectDB();
subscriptionReminderJob();

const app = express();

app.use(
  cors({
    origin: "https://subs-front.vercel.app", // your frontend URL
    credentials: true, // if you need cookies/auth headers
  })
);
app.use(express.json());

app.use("/api/auth", authRoutes);
app.use("/api/subscriptions", subscriptionRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () =>
  console.log(`Server running on port ${PORT}`)
);

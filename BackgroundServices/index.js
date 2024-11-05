import express from "express";
import dotenv from "dotenv";
import dbConnection from "./utils/db.js";
import cron from "node-cron";

dotenv.config();
const app = express();
const PORT = process.env.PORT;

// SCHEDULE SERVICES

const services = () => {
  cron.schedule("* * * * * *", () => {
    //   sendWelcomeEmail();
    //   sendPendingOrderEmail();
    //   sendDeliveredOrderEmail();
  });
};
services();
app.listen(PORT, () => {
  console.log(`Backgroundservices is running on port ${PORT}`);
  dbConnection();
});

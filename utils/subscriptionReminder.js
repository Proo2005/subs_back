import cron from "node-cron";
import Subscription from "../models/Subscription.js";
import User from "../models/User.js";
import { sendEmail } from "../config/email.js";

export const subscriptionReminderJob = () => {
  // Run every day at 9 AM
  cron.schedule("0 9 * * *", async () => {
    console.log("Running subscription reminder job...");

    const today = new Date();

    try {
      // Get all subscriptions
      const subscriptions = await Subscription.find().populate("user");

      subscriptions.forEach((sub) => {
        const start = new Date(sub.startDate);
        const renewal = new Date(start);
        renewal.setMonth(start.getMonth() + sub.validityMonths);

        const diffTime = renewal - today;
        const diffDays = Math.ceil(diffTime / (1000 * 60 * 60 * 24));

        // Send reminder if 3 days left
        if (diffDays === 3) {
          const userEmail = sub.user.email;
          sendEmail({
            to: userEmail,
            subject: `Your ${sub.appName} subscription is renewing soon`,
            text: `Hi ${sub.user.name},\n\nYour ${sub.appName} subscription will renew in 3 days on ${renewal.toDateString()}. Amount: ₹${sub.amount}\n\n- SubTrack`,
          });
        }
      });
    } catch (err) {
      console.error("Error in subscription reminder job:", err.message);
    }
  });
};

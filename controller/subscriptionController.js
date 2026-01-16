import Subscription from "../models/Subscription.js";

// ADD SUBSCRIPTION
export const addSubscription = async (req, res) => {
  try {
    const { appName, amount, startDate, validityMonths } = req.body;

    if (!appName || !amount || !startDate || !validityMonths) {
      return res.status(400).json({ message: "All fields required" });
    }

    const subscription = await Subscription.create({
      user: req.user._id,
      appName,
      amount,
      startDate,
      validityMonths,
    });

    res.status(201).json({
      message: "Subscription added",
      subscription,
    });
  } catch (error) {
    res.status(500).json({ message: "Failed to add subscription" });
  }
};

// GET USER SUBSCRIPTIONS
export const getSubscriptions = async (req, res) => {
  const subs = await Subscription.find({ user: req.user._id });
  res.json(subs);
};


// Renew subscription - set startDate to today
export const renewSubscription = async (req, res) => {
  try {
    const sub = await Subscription.findOne({ _id: req.params.id, user: req.user._id });
    if (!sub) return res.status(404).json({ message: "Subscription not found" });

    sub.startDate = new Date();
    await sub.save();

    res.json({ message: "Subscription renewed", subscription: sub });
  } catch (err) {
    res.status(500).json({ message: "Failed to renew subscription" });
  }
};

// Delete subscription
export const deleteSubscription = async (req, res) => {
  try {
    const sub = await Subscription.findOneAndDelete({ _id: req.params.id, user: req.user._id });
    if (!sub) return res.status(404).json({ message: "Subscription not found" });

    res.json({ message: "Subscription stopped and deleted" });
  } catch (err) {
    res.status(500).json({ message: "Failed to delete subscription" });
  }
};



import express from "express";
import Log from "../models/Log.js";

const router = express.Router();

// Get all logs
router.get("/", async (req, res) => {
  const logs = await Log.find().sort({ _id: -1 });
  res.json(logs);
});

// Add a log
router.post("/", async (req, res) => {
  const newLog = new Log(req.body);
  await newLog.save();
  res.json(newLog);
});

// Delete a log
router.delete("/:id", async (req, res) => {
  await Log.findByIdAndDelete(req.params.id);
  res.json({ message: "Log deleted" });
});

export default router;

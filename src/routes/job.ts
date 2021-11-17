import express, {Request,Response} from 'express';
const { Job } = require("../models");
const router = express.Router();


// Create Job
router.post("/", async function (req:Request, res:Response) {

  try {
    const payload = req.body;
    const job = await Job.create(payload);
    res.status(201).json({ success: true, data: job });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong!" });
  }
});
// Get all Jobs
router.get("/", async function (req:Request, res:Response) {
  try {
    const employees = await Job.findAll({});

    res.status(200).json({ success: true, data: employees });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong!" });
  }
});

// Get Job by ID
router.get("/:id", async function (req:Request, res:Response) {
  try {
    const id = req.params.id;
    const job = await Job.findOne({
      where: { id },
    });
    if (!job) {
      return res
        .status(404)
        .json({ success: false, message: "Job not found!" });
    }
    res.status(200).json({ success: true, data: job });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong!" });
  }
});

// Update Job
router.put("/:id", async function (req:Request, res:Response) {
  try {
    const id = req.params.id;
    const payload = req.body;
    const job = await Job.findOne({ where: { id } });
    if (!job) {
      return res
        .status(404)
        .json({ success: false, message: "Job not found!" });
    }
    await job.update(payload);
    res.status(200).json({ success: true, data: job });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong!" });
  }
});

// Delete Job
router.delete("/:id", async function (req:Request, res:Response) {
  try {
    const id = req.params.id;
    const job = await Job.findOne({ where: { id } });
    if (!job) {
      return res
        .status(404)
        .json({ success: false, message: "Job not found!" });
    }

    await job.destroy();
    res
      .status(200)
      .json({ success: true, message: "Job deleted successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong!" });
  }
});

module.exports = router;
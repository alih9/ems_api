import express, {Request,Response} from 'express';
const { JobHistory,Department ,Job,Employee} = require("../models");
const router = express.Router();



// Create JobHistory
router.post("/", async function (req:Request, res:Response) {

  try {
    const payload = req.body;
    const employee = await JobHistory.create(payload);
    res.status(201).json({ success: true, data: employee });
  } catch (error) {
    res.status(500).json({ success: false, message: `Something went wrong! ${error}` });
  }
});
// Get all JobHistorys
router.get("/", async function (req:Request, res:Response) {
  try {
    const employees = await JobHistory.findAll({
        include: [
          
          {
            model: Employee
          },{
            model: Department
          },
          {
            model: Job
          } ],
    });

    res.status(200).json({ success: true, data: employees });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong!" });
  }
});

// Get JobHistory by ID
router.get("/:id", async function (req:Request, res:Response) {
  try {
    const id = req.params.id;
    const employee = await JobHistory.findOne({
      where: { id },
      include: [
        
        {
          model: Employee
        },{
          model: Department
        },
        {
          model: Job
        } 
      ],
    });
    if (!employee) {
      return res
        .status(404)
        .json({ success: false, message: "JobHistory not found!" });
    }
    res.status(200).json({ success: true, data: employee });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong!" });
  }
});

// Update JobHistory
router.put("/:id", async function (req:Request, res:Response) {
  try {
    const id = req.params.id;
    const payload = req.body;
    const employee = await JobHistory.findOne({ where: { id } });
    if (!employee) {
      return res
        .status(404)
        .json({ success: false, message: "JobHistory not found!" });
    }
    await employee.update(payload);
    res.status(200).json({ success: true, data: employee });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong!" });
  }
});

// Delete JobHistory
router.delete("/:id", async function (req:Request, res:Response) {
  try {
    const id = req.params.id;
    const employee = await JobHistory.findOne({ where: { id } });
    if (!employee) {
      return res
        .status(404)
        .json({ success: false, message: "JobHistory not found!" });
    }

    await employee.destroy();
    res
      .status(200)
      .json({ success: true, message: "JobHistory deleted successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong!" });
  }
});

module.exports = router;
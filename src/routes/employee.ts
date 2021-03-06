import express, {Request,Response} from 'express';
const { Employee,Department ,Job} = require("../models");
const router = express.Router();



// Create Employee
router.post("/", async function (req:Request, res:Response) {

  try {
    const payload = req.body;
    const employee = await Employee.create(payload);
    res.status(201).json({ success: true, data: employee });
  } catch (error) {
    res.status(500).json({ success: false, message: `Something went wrong! ${error}` });
  }
});
// Get all Employees
router.get("/", async function (req:Request, res:Response) {
  try {
    const employees = await Employee.findAll({
        include: [
          {
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

// Get Employee by ID
router.get("/:id", async function (req:Request, res:Response) {
  try {
    const id = req.params.id;
    const employee = await Employee.findOne({
      where: { id },
      include: [
        {
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
        .json({ success: false, message: "Employee not found!" });
    }
    res.status(200).json({ success: true, data: employee });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong!" });
  }
});

// Update Employee
router.put("/:id", async function (req:Request, res:Response) {
  try {
    const id = req.params.id;
    const payload = req.body;
    const employee = await Employee.findOne({ where: { id } });
    if (!employee) {
      return res
        .status(404)
        .json({ success: false, message: "Employee not found!" });
    }
    await employee.update(payload);
    res.status(200).json({ success: true, data: employee });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong!" });
  }
});

// Delete Employee
router.delete("/:id", async function (req:Request, res:Response) {
  try {
    const id = req.params.id;
    const employee = await Employee.findOne({ where: { id } });
    if (!employee) {
      return res
        .status(404)
        .json({ success: false, message: "Employee not found!" });
    }

    await employee.destroy();
    res
      .status(200)
      .json({ success: true, message: "Employee deleted successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: "Something went wrong!" });
  }
});

module.exports = router;
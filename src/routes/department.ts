import express, {Request,Response} from 'express';
const { Department } = require("../models");
const router = express.Router();



// Create Department
router.post("/", async function (req:Request, res:Response) {

  try {
    const payload = req.body;
    const department = await Department.create(payload);
    res.status(201).json({ success: true, data: department });
  } catch (error) {
    res.status(500).json({ success: false, message: `Something went wrong! ${error}` });
  }
});
// Get all Departments
router.get("/", async function (req:Request, res:Response) {
  try {
    const employees = await Department.findAll({});

    res.status(200).json({ success: true, data: employees });
  } catch (error) {
    res.status(500).json({ success: false, message: `Something went wrong! ${error}` });
  }
});

// Get Department by ID
router.get("/:id", async function (req:Request, res:Response) {
  try {
    const id = req.params.id;
    const department = await Department.findOne({
      where: { id },
    });
    if (!department) {
      return res
        .status(404)
        .json({ success: false, message: "Department not found!" });
    }
    res.status(200).json({ success: true, data: department });
  } catch (error) {
    res.status(500).json({ success: false, message: `Something went wrong! ${error}` });
  }
});

// Update Department
router.put("/:id", async function (req:Request, res:Response) {
  try {
    const id = req.params.id;
    const payload = req.body;
    const department = await Department.findOne({ where: { id } });
    if (!department) {
      return res
        .status(404)
        .json({ success: false, message: "Department not found!" });
    }
    await department.update(payload);
    res.status(200).json({ success: true, data: department });
  } catch (error) {
    res.status(500).json({ success: false, message: `Something went wrong! ${error}` });
  }
});

// Delete Department
router.delete("/:id", async function (req:Request, res:Response) {
  try {
    const id = req.params.id;
    const department = await Department.findOne({ where: { id } });
    if (!department) {
      return res
        .status(404)
        .json({ success: false, message: "Department not found!" });
    }

    await department.destroy();
    res
      .status(200)
      .json({ success: true, message: "Department deleted successfully!" });
  } catch (error) {
    res.status(500).json({ success: false, message: `Something went wrong! ${error}` });
  }
});

module.exports = router;
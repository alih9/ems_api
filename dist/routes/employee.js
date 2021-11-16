"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { Employee, Payment } = require("../models");
const router = express_1.default.Router();
// // Create Employee
// router.post("/", async function (req:Request, res:Response) {
//   try {
//     const payload = req.body;
//     const employee = await Employee.create(payload, {
//       include: [
//         {
//           model: Payment,
//         },
//       ],
//     });
//     res.status(201).json({ success: true, data: employee });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Something went wrong!" });
//   }
// });
// // Get Employee by ID
// router.get("/:id", async function (req:Request, res:Response) {
//   try {
//     const id = req.params.id;
//     const employee = await Employee.findOne({
//       where: { id },
//       include: [
//         {
//           model: Payment,
//           required: true,
//         },
//       ],
//     });
//     if (!employee) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Employee not found!" });
//     }
//     res.status(200).json({ success: true, data: employee });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Something went wrong!" });
//   }
// });
// // Get all Employees
// router.get("/", async function (req:Request, res:Response) {
//   try {
//     const employees = await Employee.findAll({
//       where: { isActive: true },
//       include: [
//         {
//           model: Payment,
//         },
//       ],
//       order: [["id", "DESC"]],
//     });
//     res.status(200).json({ success: true, data: employees });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Something went wrong!" });
//   }
// });
// // Update Employee
// router.put("/:id", async function (req:Request, res:Response) {
//   try {
//     const id = req.params.id;
//     const payload = req.body;
//     const employee = await Employee.findOne({ where: { id } });
//     if (!employee) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Employee not found!" });
//     }
//     await employee.update(payload);
//     const paymentPayload = payload.Payments[0];
//     const { id: paymentId } = paymentPayload;
//     delete paymentPayload.id;
//     const payment = await Payment.findOne({ where: { id: paymentId } });
//     if (!payment) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Payment not found!" });
//     }
//     await payment.update(paymentPayload);
//     res.status(200).json({ success: true, data: employee });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Something went wrong!" });
//   }
// });
// // Delete Employee
// router.delete("/:id", async function (req:Request, res:Response) {
//   try {
//     const id = req.params.id;
//     const employee = await Employee.findOne({ where: { id } });
//     if (!employee) {
//       return res
//         .status(404)
//         .json({ success: false, message: "Employee not found!" });
//     }
//     await Payment.destroy({
//       where: {
//         EmployeeId: employee.id,
//       },
//     });
//     await employee.destroy();
//     res
//       .status(200)
//       .json({ success: true, message: "Employee deleted successfully!" });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Something went wrong!" });
//   }
// });
// // Create Employee Payments
// router.post("/:id/payments", async function (req:Request, res:Response) {
//   try {
//     let payload = req.body;
//     let EmployeeId = req.params.id;
//     payload = payload.map((item:any) => {
//       return { ...item, EmployeeId };
//     });
//     const payments = await Payment.bulkCreate(payload);
//     res.status(201).json({ success: true, data: payments });
//   } catch (error) {
//     res.status(500).json({ success: false, message: "Something went wrong!" });
//   }
// });
module.exports = router;
//# sourceMappingURL=employee.js.map
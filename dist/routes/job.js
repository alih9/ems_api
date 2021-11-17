"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const { Job } = require("../models");
const router = express_1.default.Router();
// Create Job
router.post("/", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const payload = req.body;
            const job = yield Job.create(payload);
            res.status(201).json({ success: true, data: job });
        }
        catch (error) {
            res.status(500).json({ success: false, message: "Something went wrong!" });
        }
    });
});
// Get all Jobs
router.get("/", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const employees = yield Job.findAll({});
            res.status(200).json({ success: true, data: employees });
        }
        catch (error) {
            res.status(500).json({ success: false, message: "Something went wrong!" });
        }
    });
});
// Get Job by ID
router.get("/:id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const job = yield Job.findOne({
                where: { id },
            });
            if (!job) {
                return res
                    .status(404)
                    .json({ success: false, message: "Job not found!" });
            }
            res.status(200).json({ success: true, data: job });
        }
        catch (error) {
            res.status(500).json({ success: false, message: "Something went wrong!" });
        }
    });
});
// Update Job
router.put("/:id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const payload = req.body;
            const job = yield Job.findOne({ where: { id } });
            if (!job) {
                return res
                    .status(404)
                    .json({ success: false, message: "Job not found!" });
            }
            yield job.update(payload);
            res.status(200).json({ success: true, data: job });
        }
        catch (error) {
            res.status(500).json({ success: false, message: "Something went wrong!" });
        }
    });
});
// Delete Job
router.delete("/:id", function (req, res) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            const id = req.params.id;
            const job = yield Job.findOne({ where: { id } });
            if (!job) {
                return res
                    .status(404)
                    .json({ success: false, message: "Job not found!" });
            }
            yield job.destroy();
            res
                .status(200)
                .json({ success: true, message: "Job deleted successfully!" });
        }
        catch (error) {
            res.status(500).json({ success: false, message: "Something went wrong!" });
        }
    });
});
module.exports = router;
//# sourceMappingURL=job.js.map
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const bodyParser = require("body-parser");
const cors = require("cors");
const indexRoutes = require("./routes/index");
const departmentRoutes = require("./routes/department");
const app = (0, express_1.default)();
const PORT = process.env.PORT || 4000;
const corsOptions = {
    origin: "*",
};
app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use("/api/v1", indexRoutes);
app.use("/api/v1/departments", departmentRoutes);
app.get("/", (req, res) => {
    res.send("Hello Typescript with Node.js!");
});
app.listen(PORT, () => {
    console.log(`Server Running here https://localhost:${PORT}`);
});
//# sourceMappingURL=app.js.map
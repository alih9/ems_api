import express, {Request,Response,Application} from 'express';
const bodyParser = require("body-parser");
const cors = require("cors");
const indexRoutes = require("./routes/index");
const departmentRoutes = require("./routes/department");
const jobRoutes = require("./routes/job");
const employeeRoutes = require("./routes/employee");
const jobHistoryRoutes = require("./routes/jobHistory");


const app:Application = express();
const PORT = process.env.PORT || 4000;

const corsOptions = {
  origin: "*",
};

app.use(cors(corsOptions));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));



app.use("/api/v1", indexRoutes);
app.use("/api/v1/departments", departmentRoutes);
app.use("/api/v1/jobs", jobRoutes);
app.use("/api/v1/jobHistory", jobHistoryRoutes);
app.use("/api/v1/employees", employeeRoutes);


app.get("/", (req:Request, res:Response):void => {
  res.send("Hello Typescript with Node.js!")
});

app.listen(PORT, ():void => {
  console.log(`Server Running here https://localhost:${PORT}`);
});


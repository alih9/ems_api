import express, {Request,Response,Application} from 'express';
const bodyParser = require("body-parser");
const cors = require("cors");
const indexRoutes = require("./routes/index");
const departmentRoutes = require("./routes/department");


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


app.get("/", (req:Request, res:Response):void => {
  res.send("Hello Typescript with Node.js!")
});

app.listen(PORT, ():void => {
  console.log(`Server Running here https://localhost:${PORT}`);
});


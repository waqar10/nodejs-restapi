import express from "express";
import bodyParser from "body-parser";
import routes from "./routes";
const app = express();

// GET , POST ,PUT , PATCH, DELETE
// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));
// parse application/json
app.use(bodyParser.json());
app.use("/v1/", routes);
const MyMiddleWare = (req, res, next) => {
  console.log("MY MiddleWare 1"); // Auth

  next(); // handle next function
};

app.get("/getStudents", MyMiddleWare, (req, res) => {
  console.log("2");
  res.json({
    studest,
    message: "successfully recved students",
    status: true
  });
});

app.post("/student", (req, res) => {
  console.log(req.body);
});

const PORT = 5000;
app.listen(PORT, () => {
  console.log("Your port is started on 5000");
});

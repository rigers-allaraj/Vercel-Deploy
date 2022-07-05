const express = require("express");
const app = express();

const path = require("path");
const logger = require("morgan");
const cors = require("cors");

app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cors());

app.get("/api/test", (req, res) => {
  res.send("test");
});

const fileFirstPath = "./frontend/build";
const resolvedFirstPath = path.resolve(fileFirstPath);
app.use(express.static(path.join(__dirname, resolvedFirstPath)));

app.get("*", function (req, res) {
  // const filePath = path.join(__dirname, "./frontend/build/index.html");
  // const resolvedPath = path.resolve(filePath);
  res.sendFile(filePath, path.join(__dirname, "./frontend/build/index.html"))
    // function (err) {
    //   if (err) {
    //     res.status(500).send(err);
    //   }
    // }
  // );
});

const port = process.env.PORT || 5000;
app.listen(port, () => console.log(`Server Running on port ${port}`));

module.exports = app;

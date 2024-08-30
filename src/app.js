const express = require("express");
const app = express();
const port = 8000;
const cors = require("cors");
app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.get("/", cors(), (req, res) => {});
app.use("/", require("./routes/index"));

// app.get("/", (req, res) => {
//     res.send(req.body);
//   });

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});

module.exports = app;

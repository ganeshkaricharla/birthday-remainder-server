const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const app = express();
let cors = require("cors");
app.use(cors());

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

{
  /** It connects to mongod,  */
}
mongoose.connect(
  "mongodb://localhost:27017/birthdayDB",
  { useNewUrlParser: true },
  () => {
    console.log("connected to db");
  }
);
const birthDaySchema = mongoose.Schema({
  fullname: String,
  words: String,
  relation: String,
  gender: String,
  showYear: Boolean,
  month: Number,
  year: Number,
  day: Number,
});
const Birthday = mongoose.model("birthday", birthDaySchema);
app.get("/all", function (req, res) {
  Birthday.find({}, function (err, foundItems) {
    res.json(foundItems);
  });
});

app.post("/add", function (req, res) {
  const date = new Date(req.body.dob);
  var showyear = req.body.showYear === "Yes" ? true : false;
  const birthday = new Birthday({
    fullname: req.body.fullname,
    relation: req.body.relation,
    gender: req.body.gender,
    words: req.body.description,
    showYear: showyear,
    month: date.getMonth(),
    day: date.getDate(),
    year: date.getFullYear(),
  });
  console.log(birthday);
  birthday.save();
  res.end();
});

app.listen(3001, () => {
  console.log("Server started succesfully");
});

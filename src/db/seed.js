require("dotenv").config();
const mongoose = require("mongoose");
const Room = require("../models/Room.model");
const rooms = require("./data");

mongoose.connect(process.env.MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

Room.create([
  { title: "Room Green", messages: [] },
  { title: "Room Red", messages: [] },
  { title: "Room Blue", messages: [] },
]).then((rooms) => {
  console.log(rooms);
  mongoose.connection.close();
});

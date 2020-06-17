require("dotenv").config();
const mongoose = require("mongoose");
const Room = require("../models/Room.model");
const rooms = require("./data");

mongoose.connect(process.env.MONGODB_URI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

Room.create(rooms, (err) => {
  if (err) {
    throw err;
  }
  console.log(`Base Datos creada con e'xito ${rooms.length} places`);
  mongoose.connection.close();
});

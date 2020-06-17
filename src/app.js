require("dotenv").config();
const express = require("express");
const morgan = require("morgan");
const path = require("path");
const { json, urlencoded } = express;
const cors = require("cors");
const { connect } = require("./db/config");
const socketio = require("socket.io");
const { handleSockets } = require("./sockets");
// routes
const roomRoutes = require("./routes/room.routes");

const app = express();

app.use(cors());
app.use(json());
app.use(urlencoded({ extended: true }));
app.use(morgan("dev"));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "hbs");

app.use("/", roomRoutes);

const start = async () => {
  try {
    await connect();
    const listener = app.listen(process.env.PORT, () => {
      console.log(`connected to server`);
    });
    const io = socketio(listener);
    handleSockets(io);
  } catch (e) {
    console.error(e);
  }
};

start();

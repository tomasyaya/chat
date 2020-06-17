const { Router } = require("express");
const { getAllRooms, getRoom } = require("../controllers/room.controllers");
const route = Router();

route.get("/:roomId", getRoom).get("/", getAllRooms);

module.exports = route;

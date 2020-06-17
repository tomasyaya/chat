const Room = require("./models/Room.model");

exports.handleSockets = (io) => {
  io.on("connect", (socket) => {
    socket.on("join", ({ roomId }) => {
      socket
        .join(roomId)
        .emit("joinedRoom", { msg: `just joined room ${roomId}` });
    });

    socket.on("newMessage", ({ msg, roomId }) => {
      Room.findByIdAndUpdate(
        { _id: roomId },
        { $push: { messages: { message: msg } } }
      ).then(() => {
        io.to(roomId).emit("newMessage", { msg });
      });
    });
  });
};

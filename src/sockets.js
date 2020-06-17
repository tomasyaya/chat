exports.handleSockets = (io) => {
  io.on("connect", (socket) => {
    socket.on("join", ({ roomId }) => {
      socket
        .join(roomId)
        .emit("joinedRoom", { msg: `just joined room ${roomId}` });
    });

    socket.on("newMessage", ({ msg, roomId }) => {
      io.to(roomId).emit("newMessage", { msg });
    });
  });
};

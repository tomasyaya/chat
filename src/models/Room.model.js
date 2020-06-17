const { Schema, model } = require("mongoose");

const roomModel = new Schema({
  title: {
    type: String,
  },
  messages: [
    {
      message: {
        type: String,
      },
    },
  ],
});

module.exports = model("room", roomModel);

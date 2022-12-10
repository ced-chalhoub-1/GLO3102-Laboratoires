const mongoose = require("mongoose");
const { Schema } = require("mongoose");

const User = mongoose.model("User", new Schema());
exports.model = User;
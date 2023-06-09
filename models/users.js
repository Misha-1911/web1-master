const { Schema, Types, model } = require('mongoose');

const userSchema = new Schema({
  _id: { type: Types.ObjectId },
  name: { type: String },
  email: { type: String },
  password: { type: String },
});

const User = new model('users', userSchema);

module.exports = { User };
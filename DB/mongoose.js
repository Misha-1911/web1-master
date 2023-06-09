const mongoose = require('mongoose');

async function setup() {
  try {
    await mongoose.connect(process.env.MONGO_URL,
      { useNewUrlParser: true, useUnifiedTopology: true }
    );
  } catch (err) {
    console.log(err);
  }
}

module.exports = setup;
const mongoose = require("mongoose");

// const Cat = mongoose.model('Cat', { name: String });

// const kitty = new Cat({ name: 'Zildjian' });
// kitty.save().then(() => console.log('meow'));

const connectDb = async () => {
  await mongoose.connect(process.env.DB_HOST);
};

module.exports = connectDb;

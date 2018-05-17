const mongoose = require("mongoose");
const db = require("../models");
mongoose.Promise = global.Promise;

// This file empties the Books collection and inserts the books below

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://localhost/giphyData",
  {
    useMongoClient: true
  }
);

const giphySeed = [
  {
    source: "https://media2.giphy.com/media/GxPHMGhxlCfLy/200w.webp",
    alt: "JuventusFC juventus juve buffon juventus fc GIF"
  },
  {
    source: "https://media2.giphy.com/media/5yYxI8HMtHkQuZMS30/200w.gif",
    alt: "money bills GIF"
  },
  {
    source: "https://media3.giphy.com/media/1Be3i03vD0H53FCnfB/200w.gif",
    alt: "flexing anderson paak GIF"
  },
  {
    source: "https://media0.giphy.com/media/3ZZ59h7zItbvKcf7YT/200w.webp",
    alt: "los angeles zoo dance GIF by Los Angeles Zoo and Botanical Gardens"
  }
];

db.Gif
  .remove({})
  .then(() => db.Gif.collection.insertMany(giphySeed))
  .then(data => {
    console.log(data.insertedIds.length + " records inserted!");
    process.exit(0);
  })
  .catch(err => {
    console.error(err);
    process.exit(1);
  });

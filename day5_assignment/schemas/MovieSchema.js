const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
  movie_name: String,
  movie_genre:String,
  production_year:Number,
  budget:Number,
});

module.exports = mongoose.model("movies", movieSchema);
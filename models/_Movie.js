var mongoose = require("mongoose");

var MovieSchema = new mongoose.Schema({
  poster_path: String,
  adult: Boolean,
  overview: String,
  type: String,
  release_date: Date,
  genre_ids: Array,
  genre_one: Number,
  genre_two: Number,
  genre_three: Number,
  genre_four: Number,
  genre_one_simon: Number,
  genre_two_simon: Number,
  genre_three_simon: Number,
  genre_four_simon: Number,
  genres_simon: Array,
  id: Number,
  original_title: String,
  original_language: String,
  title: String,
  backdrop_path: String,
  popularity: Number,
  vote_count: Number,
  video: Boolean,
  vote_average: Number
});

module.exports = mongoose.model("Movie", MovieSchema, "movies");

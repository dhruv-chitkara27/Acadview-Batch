const mongoose = require('mongoose');
const Schema = mongoose.Schema;


const SongListSchema = new Schema({
  title: String,
  artist: String
});

const AlbumSchema = new Schema({
  name: String,
  tracks: Number,
  songs: [SongListSchema]
});

const Album = mongoose.model('Album', AlbumSchema);

module.exports = Album;

import axios from "axios";

export default {
  // Gets all books
  getGifs: function() {
    return axios.get("/api/Gifs");
  },
  // Gets the Gif with the given id
  getGif: function(id) {
    return axios.get("/api/Gifs/" + id);
  },
  // Deletes the Gif with the given id
  deleteGif: function(id) {
    return axios.delete("/api/Gifs/" + id);
  },
  // Saves a Gif to the database
  saveGif: function(GifData) {
    return axios.post("/api/Gifs", GifData);
  }
};

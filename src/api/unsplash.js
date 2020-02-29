import axios from "axios";

export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID DT97VCmrOJy5IckTn3DCPxJoI31qtEW94ZjZ8JqYIFc"
  }
});

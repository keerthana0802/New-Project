import axios from "axios";

export default axios.create({
  baseURL: 'https://api.unsplash.com',
  headers: {
    Authorization: 'Client-ID e9edc8904684a1f7df7a980ed3e842bf2281488ab4b745bd848783ae9dec93e3'
  }
});
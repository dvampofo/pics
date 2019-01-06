import axios from "axios";

// `Create` method is going to create an instance of the axios client
// with a couple of default properties. `Create` allows us to Create a customized little copy of it that is customized towards
// making requests to some URL with some headers
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization:
      "Client-ID 453f9805f3a3f7382eb30de5d432f5e866cf10bcb2de3eb0f081cd738f7ad0fe"
  }
});

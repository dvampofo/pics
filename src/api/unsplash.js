import axios from "axios";
import API_K from "./config_keys";

// `Create` method is going to create an instance of the axios client
// with a couple of default properties. `Create` allows us to Create a customized little copy of it that is customized towards
// making requests to some URL with some headers

const API_KEYS = API_K; // SOURCE: https://stackoverflow.com/a/49432794

// NOTE TO SELF: In case API issue needs the key, replace `API_KEYS` with original API values.
// (Can remove `import API_K from "./config_keys";`  and  `const API_KEYS = API_K;` from above too)
export default axios.create({
  baseURL: "https://api.unsplash.com",
  headers: {
    Authorization: "Client-ID " + API_KEYS
  }
});

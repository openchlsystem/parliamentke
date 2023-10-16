import axios from "axios";

// create an axios instance
const instance = axios.create({
  baseURL: "http://127.0.0.1:8000/api/",
  // baseURL: 'https://brainworld.cyou/api/',
});

// add an interceptor to the axios instance
instance.interceptors.request.use(
  (config) => {
    // check if the request is for login
    if (config.url.endsWith("login")) {
      return config;
    }

    // set the authorization header with the token from local storage, if available
    const token = localStorage.getItem("Token");
    if (token) {
      config.headers.Authorization = `Token ${token}`;
    } else {
      // redirect to login page if no token is available
      window.location.href = "/";
      return Promise.reject(new Error("Token is null"));
    }
    return config;
  },
  (error) => {
    // handle request error
    console.log(error);
    return Promise.reject(error);
  }
);

// export the axios instance for use in other modules
export default instance;

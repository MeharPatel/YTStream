import axios from "axios";
// import { auth } from "../../firebase";

const API = axios.create({
  baseURL: "http://localhost:5000/api",
});

// API.interceptors.request.use(async (config) => {
//     const user = auth.currentUser;

//     if(user){
//         const token = await user.getIdToken();
//         config.headers.Authorization = `Bearer ${token}`;
//     }

//     return config;
// });

export default API;
// import axios, { AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";

// const API_BASE_URL = "https://stagingmaishafitiapi.maishafiti.com/api/v1";

// // Create an Axios instance
// const api: AxiosInstance = axios.create({
//   baseURL: API_BASE_URL,
//   headers: {
//     "Content-Type": "application/json",
//   },
// });

// // Attach token to every request if available
// api.interceptors.request.use((config: AxiosRequestConfig) => {
//   const token = localStorage.getItem("accessToken");
//   if (token) {
//     config.headers = {
//       ...config.headers,
//       Authorization: `Bearer ${token}`,
//     };
//   }
//   return config;
// });

// // Handle errors globally
// api.interceptors.response.use(
//   (response: AxiosResponse) => response,
//   (error) => {
//     if (error.response?.status === 401) {
//       // Unauthorized — maybe redirect to login
//       console.error("Unauthorized, redirecting to login...");
//       window.location.href = "/login";
//     }
//     return Promise.reject(error);
//   }
// );

// export default api;


import axios from "axios";

const api = axios.create({
  baseURL: "https://stagingmaishafitiapi.maishafiti.com/api/v1",
  headers: { "Content-Type": "application/json" },
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("accessToken");
  if (token) config.headers.Authorization = `Bearer ${token}`;
  return config;
});

export default api;

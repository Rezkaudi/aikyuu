import axios from 'axios';
// import { refreshToken } from './auth';

const API_URL = import.meta.env.VITE_API_URL
// const API_URL ="https://aikyuu-staging.up.railway.app/api"

const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    credentials: true,
  }
});


// // ---------- Token Refresh Coordination ----------
// let isRefreshing = false;
// let refreshSubscribers: ((token: string) => void)[] = [];

// function subscribeTokenRefresh(cb: (token: string) => void) {
//   refreshSubscribers.push(cb);
// }

// // ---------- Response Interceptor with Token Refresh Logic ----------
// api.interceptors.response.use(
//   (response) => response,
//   async (error) => {
//     const originalRequest = error.config;

//     // Check if response is 401 and hasn't been retried yet
//     if (error.response?.status === 401 && !originalRequest._retry) {
//       originalRequest._retry = true;

//       // First request to refresh the token
//       if (!isRefreshing) {
//         isRefreshing = true;

//         try {
//           const response = await refreshToken("ss")

//           return api(originalRequest);
//         } catch (refreshError) {
//           isRefreshing = false;
//           refreshSubscribers = [];

//           // Redirect to login
//           // store.dispatch(logout());
//           window.location.href = '/login';
//           return Promise.reject(refreshError);
//         } finally {
//           isRefreshing = false;
//         }
//       }

//       // If a refresh is already in progress, wait for it to finish
//       return new Promise((resolve) => {
//         subscribeTokenRefresh(() => {
//           resolve(api(originalRequest));
//         });
//       });
//     }

//     return Promise.reject(error);
//   }
// );

export default api;

import { apiRequest } from "../configs/apiMiddleware";

export default {
  register: (jsonData) => apiRequest("POST", "/register", { jsonData }),
  login: (jsonData) => apiRequest("POST", "/login", { jsonData }),
};
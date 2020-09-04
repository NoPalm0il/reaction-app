import { apiRequest } from "../configs/apiMiddleware";

export default {
  register: (jsonData) => apiRequest("POST", "/user/register", { jsonData }),
  login: (jsonData) => apiRequest("POST", "/user/login", { jsonData }),
};
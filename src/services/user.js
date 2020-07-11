import { apiRequest } from "../configs/apiMiddleware";

export default {
  register: (body) => apiRequest("POST", "/user/register", { body }),
  login: (body) => apiRequest("POST", "/user/login", { body }),
};
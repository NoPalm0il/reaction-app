import { apiRequest } from "../configs/apiMiddleware";

export default {
  register: (jsonData) => apiRequest("POST", "/user/register", { jsonData }),
  login: (jsonData) => apiRequest("POST", "/user/login", { jsonData }),
  getMemes: (username) => apiRequest("GET", `/user/getMemes/${username}`),
  addLike: (id, jsonData) => apiRequest("PUT", `/user/addLike/${id}`, { jsonData }),
  removeLike: (id, jsonData) => apiRequest("PUT", `/user/removeLike/${id}`, { jsonData }),
  isLiked: (id, jsonData) => apiRequest("POST", `/user/memeLiked/${id}`, { jsonData }),
};
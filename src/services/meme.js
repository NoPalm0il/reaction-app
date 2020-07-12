import { apiRequest } from "../configs/apiMiddleware";

export default {
  getAll: (searchText) => apiRequest("GET", `/meme`, { query: { search: searchText } }),
  getOne: (id) => apiRequest("GET", `/meme/${id}`),
  create: (jsonData) => apiRequest("POST", `/meme`, { jsonData }),
  update: (id, jsonData) => apiRequest("PUT", `/meme/data/${id}`, { jsonData }),
  //setCover: (id, formData) => apiRequest("PUT", `/book/cover/${id}`, { formData }),
  remove: (id) => apiRequest("DELETE", `/meme/${id}`),
};
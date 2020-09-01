import { apiRequest } from "../configs/apiMiddleware";

export default {
  getOne: (id) => apiRequest("GET", `/meme/${id}`),
  getQuery: (searchText) => apiRequest("GET", `/meme/data/qry`, { query: { search: searchText } }),
  getAll: () => apiRequest("GET", `/meme/data/list`),
  create: (body) => apiRequest("POST", `/meme`, { body }),
  update: (id, jsonData) => apiRequest("PUT", `/meme/data/${id}`, { jsonData }),
  //setMemage: (id, formData) => apiRequest("PUT", `/meme/memage/${id}`, { formData }),
  remove: (id) => apiRequest("DELETE", `/meme/data/${id}`),
};
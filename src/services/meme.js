import { apiRequest } from "../configs/apiMiddleware";

export default {
  getOne: (id) => apiRequest("GET", `/meme/${id}`),
  getQuery: (searchText) => apiRequest("GET", `/meme/data/qry`, { query: { search: searchText } }),
  getCategoryMemes: (category) => apiRequest("GET", `/meme/cat/${category}`),
  getAll: () => apiRequest("GET", `/meme/data/list`),
  getArray: (jsonData) => apiRequest("POST", `/meme/data/array`, { jsonData } ),
  create: (jsonData) => apiRequest("POST", `/meme`, { jsonData }),
  update: (id, jsonData) => apiRequest("PUT", `/meme/data/${id}`, { jsonData }),
  incVotes: (id, jsonData) => apiRequest("POST", `/meme/vote/inc/${id}`, { jsonData }),
  decVotes: (id, jsonData) => apiRequest("POST", `/meme/vote/dec/${id}`, { jsonData }),
  getVotes: (id) => apiRequest("GET", `/meme/vote/get/${id}`),
  setMemage: (id, formData) => apiRequest("PUT", `/meme/memage/${id}`, { formData }),
  remove: (id) => apiRequest("DELETE", `/meme/data/${id}`),
  addComment: (id, jsonData) => apiRequest("PUT", `/meme/comment/${id}`, { jsonData }),
};
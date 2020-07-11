const serverURL = "http://localhost:5000";

export const apiRequest = (method, route, params) => {
  let currentUser = sessionStorage.getItem("user");
  return new Promise((resolve, reject) => {
    let serviceUrl = serverURL + route;
    if (params && params.query) {
      serviceUrl += getQueryString(params.query);
    }
    fetch(serviceUrl, {
      method,
      headers: {
        "Content-Type": "application/json",
        ...(currentUser && { Authorization: JSON.parse(currentUser).token }),
      },
      ...(params && params.body && { body: JSON.stringify(params.body) }),
    })
      .then((res) => parseResponse(res))
      .then((data) => resolve(data))
      .catch((err) => {
        console.error(`error ${method} ${route}: ${err.message}`);
        reject(err);
      });
  });
};

const parseResponse = (response) =>
  new Promise((resolve, reject) => {
    if (response.ok) {
      resolve(response.json());
    } else {
      reject(response.text());
    }
  });

const getQueryString = (query) => {
  if (Object.values(query).some((x) => x))
    return (
      "?" +
      Object.entries(query)
        .filter(([key, value]) => query[key])
        .map(([key, value]) => `${key}=${value}`)
        .join("&")
    );
  else return "";
};

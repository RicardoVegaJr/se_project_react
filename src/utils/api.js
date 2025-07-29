import { checkToken } from "./token";

const baseUrl = "http://localhost:3001";

function getItems() {
  return fetch(`${baseUrl}/items`).then((res) => checkResponse(res));
}

function checkResponse(res) {
  console.log("api.js - checkResponse: Received Response Status:", res.status);
  if (res.ok) {
    if (res.status === 204) {
      console.warn(
        "api.js - Received 204 No Content. For like/unlike, backend should return updated item (200 OK). Returning empty object to prevent JSON parsing error, but this likely indicates a backend issue."
      );
      return {};
    }
    return res.json().then((json) => {
      console.log("api.js - checkResponse: Parsed JSON response:", json);
      return json;
    });
  } else {
    return res
      .json()
      .then((err) => {
        console.error("api.js - checkResponse: Error response JSON:", err);
        return Promise.reject(err);
      })
      .catch(() => {
        console.error(
          `api.js - checkResponse: Error: ${res.status} and no JSON body.`
        );
        return Promise.reject(new Error(`Error: ${res.status}`));
      });
  }
}

const deleteItem = (id) => {
  let jwt;

  try {
    jwt = checkToken();
  } catch (error) {
    console.error("Authentication error for deleteItem:", error.message);
    return Promise.reject(error);
  }

  return fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
  }).then((res) => {
    checkResponse(res);
  });
};

const onAddItemCard = (newItem) => {
  let jwt;

  try {
    jwt = checkToken();
  } catch (error) {
    console.error("Authentication error for addItem:", error.message);
    return Promise.reject(error);
  }
  return fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${jwt}`,
    },
    body: JSON.stringify(newItem),
  }).then((res) => checkResponse(res));
};

const getUserInfo = (token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
};

const addCardLike = (id, token) => {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "PUT",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
};

const removeCardLike = (id, token) => {
  return fetch(`${baseUrl}/items/${id}/likes`, {
    method: "Delete",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  }).then((res) => checkResponse(res));
};

const editProfile = (name, avatar, token) => {
  return fetch(`${baseUrl}/users/me`, {
    method: "PATCH",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify({
      name: name,
      avatar: avatar,
    }),
  }).then((res) => checkResponse(res));
};

export {
  getItems,
  deleteItem,
  onAddItemCard,
  checkResponse,
  getUserInfo,
  addCardLike,
  removeCardLike,
  editProfile,
};

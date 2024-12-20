const baseUrl = "http://localhost:3001";

function getItems() {
  return fetch(`${baseUrl}/items`).then((res) => checkResponse(res));
}

function checkResponse(res) {
  if (res.ok) {
    return res.json();
  } else {
    return Promise.reject(`Error: ${res.status}`);
  }
}

const deleteItem = (id) => {
  fetch(`${baseUrl}/items/${id}`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  })
    .then((res) => {
      checkResponse(res);
    })
    .catch((error) => {
      console.error(error);
    });
};

const onAddItemCard = (newItem) => {
  fetch(`${baseUrl}/items`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(newItem),
  })
    .then((res) => {
      checkResponse(res);
    })
    .catch((error) => {
      console.error(error);
    });
};

export { getItems };
export { deleteItem };
export { onAddItemCard };

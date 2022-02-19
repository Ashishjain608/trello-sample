export const getAllLists = () => {
  if (localStorage.getItem("trelloLists")) {
    return JSON.parse(localStorage.getItem("trelloLists"));
  }
  return [];
};

export const updateAllList = (lists) => {
  localStorage.setItem("trelloLists", JSON.stringify(lists));
};

export const createList = (listData) => {
  // title
  //cards
  // id
  let allLists = [];
  if (localStorage.getItem("trelloLists")) {
    allLists = JSON.parse(localStorage.getItem("trelloLists"));
  }
  allLists.push(listData);
  localStorage.setItem("trelloLists", JSON.stringify(allLists));
};

export const addCard = (listId, cardData) => {
  let allLists = JSON.parse(localStorage.getItem("trelloLists"));
  let updatedList = allLists.map((list) => {
    if (list.id === listId) {
      list.cards.push(cardData);
    }
    return list;
  });
  localStorage.setItem("trelloLists", JSON.stringify(updatedList));
};

// id
// title
// content

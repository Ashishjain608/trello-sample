import React from "react";
import { createList, getAllLists, updateAllList } from "../../api/Common";
import Header from "../header/Header";
import List from "../list/List";
import { v4 as uuidv4 } from "uuid";
import "./TrelloBoard.css";
import { useState } from "react";

const TrelloBoard = (props) => {
  let listData = getAllLists();

  const [lists, setLists] = useState(listData);
  //id
  //cards
  //title

  const handleAddList = () => {
    let listName = window.prompt("Enter list Title");
    let payload = {
      title: listName,
      cards: [],
      id: uuidv4(),
    };
    createList(payload);
    setLists((prev) => [...prev, payload]);
  };

  const updateCardsInList = (listId, card) => {
    let updatedLists = lists;
    updatedLists = updatedLists.map((listItem) => {
      if (listItem.id === listId) listItem.cards.push(card);
      else if (listItem.cards.some((c) => c.id === card.id)) {
        listItem.cards = listItem.cards.filter((c) => c.id !== card.id);
      }
      return listItem;
    });

    setLists(updatedLists);

    updateAllList(updatedLists);
  };

  return (
    <div className="board">
      <Header />
      <div className="actions">
        <button onClick={handleAddList}>Add List</button>
      </div>
      <div className="all-list-container">
        {lists.map((listItem) => (
          <List
            key={listItem.id}
            id={listItem.id}
            title={listItem.title}
            cards={listItem.cards}
            updateCardsInList={updateCardsInList}
          />
        ))}
      </div>
    </div>
  );
};

export default TrelloBoard;

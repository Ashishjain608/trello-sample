import React from "react";
import Card from "../card/Card";
import { v4 as uuidv4 } from "uuid";
import { addCard } from "../../api/Common";
import "./List.css";
import { useState } from "react";
import { useEffect } from "react";

const List = (props) => {
  const { title, id: listId, cards, updateCardsInList } = props;

  const [allCards, setAllCards] = useState(cards);

  useEffect(() => {
    setAllCards(cards);
  }, [cards])

  const handleAddCard = () => {
    let title = window.prompt("Enter card title");
    let content = window.prompt("Enter card content");
    let payload = {
      title,
      content,
      id: uuidv4(),
    };

    addCard(listId, payload);
    setAllCards((prev) => [...prev, payload]);
  };

  const handleDragLeave = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDragEnter = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDragOver = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };
  const handleDrop = (e) => {
    e.preventDefault();
    e.stopPropagation();
    let data = JSON.parse(e.nativeEvent.dataTransfer.getData("text/plain"));
    console.log("drop", data);
    updateCardsInList(listId, data);
  };

  return (
    <div
      className="list"
      onDrop={handleDrop}
      onDragOver={handleDragOver}
      onDragEnter={handleDragEnter}
      onDragLeave={handleDragLeave}
    >
      <h4> {title}</h4>
      <div className="card-container">
        {allCards.map((cardItem) => (
          <Card
            key={cardItem.id}
            title={cardItem.title}
            content={cardItem.content}
            id={cardItem.id}
          />
        ))}
      </div>
      <div className="add-card-button">
        <button onClick={handleAddCard}>+ Add Card</button>
      </div>
    </div>
  );
};

export default List;

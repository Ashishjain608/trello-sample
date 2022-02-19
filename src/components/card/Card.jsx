import React from "react";
import "./Card.css";

const Card = (props) => {
  const { title, content, id } = props;

  const handleDragStart = (e) => {
    console.log("start", e);
    e.nativeEvent.dataTransfer.setData(
      "text/plain",
      JSON.stringify({ id, title, content })
    );
  };

  return (
    <div className="card" draggable={true} onDragStart={handleDragStart}>
      <div>{title}</div>
      <div className="content">{content}</div>
    </div>
  );
};

export default Card;

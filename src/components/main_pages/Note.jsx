// src/components/Note.jsx
import React from "react";
import { useDrag } from "react-dnd";
import { ItemTypes } from "../../ItemTypes";

const Note = ({ note }) => {
  const [{ isDragging }, drag] = useDrag(() => ({
    type: ItemTypes.NOTE,
    item: { note },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  return (
    <div
      ref={drag}
      className={`draggable-note ${isDragging ? "opacity-50" : ""}`}
    >
      {note}
    </div>
  );
};

export default Note;

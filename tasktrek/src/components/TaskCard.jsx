import React from "react";
import "./TaskCard.css";
import Tag from "./Tag";
import deleteIcon from "../assets/delete.png";

const TaskCard = ({ task, handleDelete, index, setActiveCard }) => {
  return (
    <article
      className="task_card"
      draggable
      onDragStart={() => setActiveCard(index)}
      onDragEnd={() => setActiveCard(null)}
    >
      <p className="task_text">{task.task}</p>

      <div className="task_card_bottom_line">
        <div className="task_card_tags">
          {task.tags.map((tag, index) => (
            <Tag tagName={tag} key={index} selected={true} />
          ))}
        </div>
        <button onClick={() => handleDelete(index)} className="task_delete">
          <img className="delete_icon" src={deleteIcon} alt="" />
        </button>
      </div>
    </article>
  );
};

export default TaskCard;

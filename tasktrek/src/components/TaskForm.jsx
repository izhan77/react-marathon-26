import React, { useState } from "react";
import "./TaskForm.css";
import Tag from "./Tag";

const TaskForm = ({ setTasks }) => {
  const [taskData, setTaskData] = useState({
    task: "",
    status: "todo",
    tags: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;

    setTaskData((prev) => {
      return { ...prev, [name]: value };
    });
  };

  const selectTag = (tagName) => {
    if (taskData.tags.some((tag) => tag === tagName)) {
      const filteredTags = taskData.tags.filter((tag) => tag !== tagName);

      setTaskData((prev) => {
        return { ...prev, tags: filteredTags };
      });
    } else {
      setTaskData((prev) => {
        return { ...prev, tags: [...prev.tags, tagName] };
      });
    }
  };

  const checkTag = (tagName) => {
    return taskData.tags.some((tag) => tag === tagName);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    setTasks((prev) => {
      return [...prev, taskData];
    });

    setTaskData({
      task: "",
      status: "todo",
      tags: [],
    });
  };

  return (
    <header className="app_header">
      <form>
        <input
          type="text"
          placeholder="Enter your task"
          className="task_input"
          onChange={handleChange}
          name="task"
          value={taskData.task}
        />

        <div className="task_form_bottom_line">
          <div>
            <Tag
              selectTag={selectTag}
              selected={checkTag("HTML")}
              tagName="HTML"
            />
            <Tag
              selectTag={selectTag}
              selected={checkTag("CSS")}
              tagName="CSS"
            />
            <Tag
              selectTag={selectTag}
              selected={checkTag("JavaScript")}
              tagName="JavaScript"
            />
            <Tag
              selectTag={selectTag}
              selected={checkTag("React")}
              tagName="React"
            />
          </div>

          <div>
            <select
              name="status"
              onChange={handleChange}
              className="task_status"
              value={taskData.status}
            >
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="done">Done</option>
            </select>

            <button
              onClick={handleSubmit}
              type="submit"
              className="task_submit"
            >
              + Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default TaskForm;

import "../styles/task.scss";
import { useState } from "react";

export default function Task(props) {
  const {  deleteTask, moveTask, task } = props;

  const [urgencyLevel, setUrgencyLevel] = useState(task.urgency);
  const [collapsed, setCollapsed] = useState(task.isCollapsed);
  const [formAction, setFormAction] = useState("");

  function setUrgency(event) {
    setUrgencyLevel(event.target.attributes.urgency.value);
  }

  function handleSubmit(event) {
    event.preventDefault();
  
    if (formAction === "save") {
      if (collapsed) {
        setCollapsed(false);
      } else {
        let newTask = {
          id: task.id,
          title: event.target.elements.title.value,
          description: event.target.elements.description.value,
          urgency: urgencyLevel,
          status: task.status,
          isCollapsed: true,
        };
  
        // Send the new task to the backend
        fetch('http://127.0.0.1:9292/tasks', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(newTask),
        })
          .then(response => response.json())
          .then(data => {
            // Handle the response from the backend if needed
            console.log(data);
          })
          .catch(error => {
            // Handle any errors that occurred during the request
            console.error('Error:', error);
          });
  
        setCollapsed(true);
      }
    }
  
    if (formAction === "delete") {
      deleteTask(task.id);
    }
  }
  

  function handleMoveLeft() {
    let newStatus = "";

    if (task.status === "In Progress") {
      newStatus = "Backlog";
    } else if (task.status === "Done") {
      newStatus = "In Progress";
    }

    if (newStatus !== "") {
      moveTask(task.id, newStatus);
    }
  }

  function handleMoveRight() {
    let newStatus = "";

    if (task.status === "Backlog") {
      newStatus = "In Progress";
    } else if (task.status === "In Progress") {
      newStatus = "Done";
    }

    if (newStatus !== "") {
      moveTask(task.id, newStatus);
    }
  }

  return (
    <div className={`task ${collapsed ? "collapsedTask" : ""}`}>
      <button onClick={handleMoveLeft} className="button moveTask">
        &#171;
      </button>
      <form onSubmit={handleSubmit} className={collapsed ? "collapsed" : ""}>
        <input
          type="text"
          className="title input"
          name="title"
          placeholder="Enter Title"
          disabled={collapsed}
          defaultValue={task.title}
        />
        <input
          type="text"
          className="title input"
          name="title"
          placeholder="Enter description"
          disabled={collapsed}
          defaultValue={task.title}
        />
        <input
          type="text"
          className="title input"
          name="title"
          placeholder="Enter due_date"
          disabled={collapsed}
          defaultValue={task.title}
        />
        <input
          type="text"
          className="title input"
          name="title"
          placeholder="Enter category_id"
          disabled={collapsed}
          defaultValue={task.title}
        />
        <input
          type="text"
          className="title input"
          name="title"
          placeholder="Enter completed"
          disabled={collapsed}
          defaultValue={task.title}
        />
        <input
          type="text"
          className="title input"
          name="title"
          placeholder="Enter user_id"
          disabled={collapsed}
          defaultValue={task.title}
        /> 
        <div className="urgencyLabels">
          <label className={`low ${urgencyLevel === "low" ? "selected" : ""}`}>
            <input
              urgency="low"
              onChange={setUrgency}
              type="radio"
              name="urgency"
            />
            low
          </label>
          <label
            className={`medium ${urgencyLevel === "medium" ? "selected" : ""}`}
          >
            <input
              urgency="medium"
              onChange={setUrgency}
              type="radio"
              name="urgency"
            />
            medium
          </label>
          <label
            className={`high ${urgencyLevel === "high" ? "selected" : ""}`}
          >
            <input
              urgency="high"
              onChange={setUrgency}
              type="radio"
              name="urgency"
            />
            high
          </label>
        </div>
        <button
          onClick={() => {
            setFormAction("save");
          }}
          className="button"
        >
          {collapsed ? "Edit" : "Save"}
        </button>
        {collapsed && (
          <button
            onClick={() => {
              setFormAction("delete");
            }}
            className="button delete"
          >
            X
          </button>
        )}
      </form>
      <button onClick={handleMoveRight} className="button moveTask">
        &#187;
      </button>
    </div>
  );
}

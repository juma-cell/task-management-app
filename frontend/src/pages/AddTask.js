import { useContext, useState } from "react";
import image1 from "../images/image1.jpeg";

import { TaskContext } from "../context/TaskContext";

function AddTask() {

  const { AddTask } = useContext(TaskContext);

  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [dueDate, setDueDate] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    AddTask(title, content, dueDate);
  };

  return (
    <div className="container" style={{ minHeight: "70vh" }}>
      <h3>Add Task</h3>
      <div className="row h-full">
        <div className="col-md-6">
          <img src={image1} className="img-fluid" alt="task" />
        </div>
        <div className="col-md-6">
          <form onSubmit={handleSubmit}>
            <div className="form-group mt-3">
              <label>Title</label>
              <input
                type="text"
                onChange={(e) => setTitle(e.target.value)}
                className="form-control"
                placeholder="Enter Title"
              />
            </div>

            <div className="form-group mt-3">
              <label>Description</label>
              <textarea
                type="text"
                onChange={(e) => setContent(e.target.value)}
                className="form-control"
                placeholder="Enter Description"
              />
            </div>

            <div className="form-group mt-3">
              <label>Due Date</label>
              <input
                type="date"
                onChange={(e) => setDueDate(e.target.value)}
                className="form-control"
              />
            </div>

            <button type="submit" className="btn mt-3 btn-success">
              Add Task
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default AddTask;

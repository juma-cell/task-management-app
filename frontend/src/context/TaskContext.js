import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

export const TaskContext = createContext();

export function TaskProvider({ children }) {
  const nav = useNavigate();
  const [onchange, setonchange] = useState(false);
  const [tasks, setTasks] = useState();

  // AddTask
  const AddTask = (title, content) => {
    fetch("https://tasks-5n2l.onrender.com/addtasks", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // Include user token
      },
      body: JSON.stringify({ title: title, content: content }),
    })
      .then((res) => res.json())
      .then((response) => {
        console.log(response);
        if (response.error) {
          Swal.fire("Success", response.success, "success");
        } else if (response.success) {
          nav("/");
          Swal.fire("Error", "Something went wrong", "error");
          setonchange(!onchange);
        } else {
          Swal.fire("Success", response.success, "success");
        }
      });
  };

  // Delete Task
  const deleteTask = (id) => {
    fetch(`https://tasks-5n2l.onrender.com/deletetasks/${id}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // Include user token
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setonchange(!onchange);
        console.log(response);
        nav("/");
        Swal.fire("Success", "Delete success", "success");
        nav("/");
      });
  };

  // Fetch Tasks
  useEffect(() => {
    fetch("https://tasks-5n2l.onrender.com/tasks", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${localStorage.getItem("accessToken")}`, // Include user token
      },
    })
      .then((res) => res.json())
      .then((response) => {
        setTasks(response);
      });
  }, [onchange]);

  const contextData = {
    tasks,
    deleteTask,
    AddTask,
  };

  return (
    <TaskContext.Provider value={contextData}>{children}</TaskContext.Provider>
  );
}

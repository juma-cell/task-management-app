import React, { useContext } from 'react';
import { useParams } from 'react-router-dom';
import { TaskContext } from '../context/TaskContext';
import { AuthContext } from '../context/AuthContext';

export default function Task() {
  const { tasks, deleteTask } = useContext(TaskContext);
  const { current_user } = useContext(AuthContext);

  const { id } = useParams();
  const singleTask = tasks && tasks.find((task) => task.id === id);

  return (
    <div className="container mx-auto">
      {singleTask ? (
        <>
          <h4>{singleTask.title}</h4>
          <div className="row gx-5">
            <div className="col-lg-8 bg-light">
              <div className="d-flex mt-4 gap-5">
                <p>{singleTask.user.username}</p>
                <p>{singleTask.created_at}</p>
                {current_user && current_user.username === singleTask.user.username && (
                  <>
                    <button className="btn btn-success btn-sm">Edit</button>
                    <button onClick={() => deleteTask(singleTask.id)} className="btn btn-danger btn-sm">
                      Delete
                    </button>
                  </>
                )}
              </div>
              <p className="mt-3">{singleTask.content}</p>
            </div>

            <div className="col-lg-4">
              <div className="card p-2">
                <h5 className="fw-thin mt-5">Notice</h5>
                <p>{singleTask.description}</p>
              </div>
            </div>
          </div>
        </>
      ) : (
        <p>Loading task...</p>
      )}
    </div>
  );
}

import { useContext, useState } from "react"
import image1 from "../images/image1.jpeg"
import { AuthContext } from "../context/AuthContext"
import { TaskContext } from "../context/TaskContext"

  function AddTask() {
    const { current_user } = useContext(AuthContext)
    const { AddTask } = useContext(TaskContext)

    const [title, setTitle] = useState()
    const [content, setContent] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()

        AddTask(title, content, current_user.id)
    }

    return (
        <div className="container" style={{ "min-height": "70vh" }}>
            {current_user && current_user ?
        <>
            <h3>Add Task</h3>
            <div className="row h-full">
                <div className="col-md-6">
                    <img src={image1} className="img-fluid"  alt=" task"/>
                </div>
                <div className="col-md-6">
                    <form onSubmit={handleSubmit}>
                        <div class="form-group mt-3">
                            <label>Title</label>
                            <input type="text" onChange={e => setTitle(e.target.value)} class="form-control" aria-describedby="emailHelp" placeholder="Enter Title" />
                        </div>
                    
                        <div class="form-group mt-3">
                            <label for="exampleInputEmail1">Description</label>
                            <textarea type="text" onChange={e => setContent(e.target.value)} class="form-control" aria-describedby="emailHelp" placeholder="Enter Title" />
                        </div>

                        <button type="submit" class="btn mt-3 btn-success">Submit</button>
                    </form>
                </div>
            </div>
        </>
        :
        <div>
            Please login to add a task
        </div>
    }
        </div>
    )
}
export default AddTask;

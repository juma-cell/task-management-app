import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";
import image1 from "../images/image1.jpeg";
import image2 from "../images/image2.jpeg";
import image3 from "../images/image3.jpeg";
import image4 from "../images/image4.jpeg";
import image5 from "../images/image5.jpeg";
import image6 from "../images/image6.jpeg";
import image7 from "../images/image7.jpeg";
import image8 from "../images/image8.jpeg";
import image9 from "../images/image9.jpeg";
import image10 from "../images/image10.jpeg";
import image11 from "../images/image11.jpeg";
import image12 from "../images/image12.jpeg";

export default function Home() {
  const { tasks } = useContext(TaskContext);

  return (
    <div>
      <h1 className="text-center">Check on These</h1>
      <div className="container-fluid row">
        {tasks && tasks.length < 1 ? (
          <div className="text-info">There are no tasks at the moment</div>
        ) : (
          tasks.map((task, index) => (
            <div className="col-12 col-sm-6 col-md-4 mb-4" key={task.id}>
              <div className="card h-100">
                <div className="overflow-hidden" style={{ height: "70%" }}>
                  <img
                    src={getImageByIndex(index)}
                    className="card-img-top"
                    alt="Loading..."
                    style={{ objectFit: "cover", height: "100%" }}
                  />
                </div>
                <div className="card-body">
                  <h5 className="card-title">{task.title}</h5>
                  <p className="card-text">{task.content}</p>
                  <h1 to="#" className="btn btn-warning btn-sm w-100">
                   
                  </h1>
                </div>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}

function getImageByIndex(index) {
  const images = [
    image1,
    image2,
    image3,
    image4,
    image5,
    image6,
    image7,
    image8,
    image9,
    image10,
    image11,
    image12,
  ];
  return images[index] || "";
}

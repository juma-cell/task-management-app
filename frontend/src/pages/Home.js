import { Link } from "react-router-dom";
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
          ""
        )}

        {tasks &&
          tasks.map((task, index) => (
            <div className="col-6 col-sm-6 col-md-4 mb-5" key={task.id}>
              <div className="card">
                <div
                  className="overflow-hidden"
                  style={{ height: "90%" }} // Adjusted height
                >
                  {index === 0 && (
                    <img
                      src={image1}
                      className="card-img-top"
                      alt="Loading..."
                      style={{ objectFit: "cover", height: "100%" }} // Adjusted image style
                    />
                  )}
                  {index === 1 && (
                    <img
                      src={image2}
                      className="card-img-top"
                      alt="Loading..."
                      style={{ objectFit: "cover", height: "100%" }} // Adjusted image style
                    />
                  )}
                  {index === 2 && (
                    <img
                      src={image3}
                      className="card-img-top"
                      alt="Loading..."
                      style={{ objectFit: "cover", height: "100%" }} // Adjusted image style
                    />
                  )}
                  {index === 3 && (
                    <img
                      src={image4}
                      className="card-img-top"
                      alt="Loading..."
                      style={{ objectFit: "cover", height: "100%" }} // Adjusted image style
                    />
                  )}
                  {index === 4 && (
                    <img
                      src={image5}
                      className="card-img-top"
                      alt="Loading..."
                      style={{ objectFit: "cover", height: "100%" }} // Adjusted image style
                    />
                  )}
                  {index === 5 && (
                    <img
                      src={image6}
                      className="card-img-top"
                      alt="Loading..."
                      style={{ objectFit: "cover", height: "100%" }} // Adjusted image style
                    />
                  )}
                  {index === 6 && (
                    <img
                      src={image7}
                      className="card-img-top"
                      alt="Loading..."
                      style={{ objectFit: "cover", height: "100%" }} // Adjusted image style
                    />
                  )}
                  {index === 7 && (
                    <img
                      src={image8}
                      className="card-img-top"
                      alt="Loading..."
                      style={{ objectFit: "cover", height: "100%" }} // Adjusted image style
                    />
                  )}
                  {index === 8 && (
                    <img
                      src={image9}
                      className="card-img-top"
                      alt="Loading..."
                      style={{ objectFit: "cover", height: "100%" }} // Adjusted image style
                    />
                  )}
                  {index === 9 && (
                    <img
                      src={image10}
                      className="card-img-top"
                      alt="Loading..."
                      style={{ objectFit: "cover", height: "100%" }} // Adjusted image style
                    />
                  )}
                  {index === 10 && (
                    <img
                      src={image11}
                      className="card-img-top"
                      alt="Loading..."
                      style={{ objectFit: "cover", height: "100%" }} // Adjusted image style
                    />
                  )}
                  {index === 11 && (
                    <img
                      src={image12}
                      className="card-img-top"
                      alt="Loading..."
                      style={{ objectFit: "cover", height: "100%" }} // Adjusted image style
                    />
                  )}
                </div>
                <div className="card-body">
                  <h5 className="card-title">{task.title}</h5>
                  <p className="card-text">{task.content}</p>
                  <Link
                    to={`/task/${task.id}`}
                    href="#"
                    className="btn btn-success btn-sm w-100"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            </div>
          ))}
      </div>
    </div>
  );
}

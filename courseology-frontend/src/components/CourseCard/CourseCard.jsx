import "./CourseCard.scss";
import onlineImage from "../../assets/images/online_course_logo.png";
import inpersonImage from "../../assets/images/inperson_course_logo.png";
import selfpacedImage from "../../assets/images/self-paced_e-learning_logo.png";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const CourseCard = () => {
  const navigator = useNavigate();

  const getCourse = async () => {
    const url = "http://localhost:8080/api/courses/" + id;
    const response = await fetch(url);
    const data = await response.json();
    setCourse(data);
  };

  useEffect(() => {
    getCourse();
  }, []);

  const [course, setCourse] = useState({});

  let { id } = useParams();

  const returnToSearch = () => {
    navigator("/");
  };

  return (
    <div className="course-selection">
      <h2 className="course-title">{course.name}</h2>

      <div className="course-card">
        <div className="course-details__info">
          <h4>Syllabus: </h4>
          <textarea
            rows="2"
            cols="35"
            disabled="disabled"
            id={id}
            value={course.syllabus}
          ></textarea>
        </div>

        <div className="course-details__info">
          <h4>Category: </h4>{" "}
          <textarea
            ows="2"
            cols="35"
            disabled="disabled"
            id={id}
            value={course.category}
          ></textarea>
        </div>

        <div className="course-details__info">
          <h4>Start Date: </h4>
          <textarea
            ows="2"
            cols="35"
            disabled="disabled"
            id={id}
            value={course.startdate}
          ></textarea>
        </div>

        <div className="course-details__info">
          <h4>Start Time: </h4>
          <textarea
            ows="2"
            cols="35"
            disabled="disabled"
            id={id}
            value={course.starttime}
          ></textarea>
        </div>

        <div className="course-details__info">
          <h4>Duration: </h4>
          <textarea
            ows="2"
            cols="35"
            disabled="disabled"
            id={id}
            value={course.duration}
          ></textarea>
        </div>

        <div className="course-details__info">
          <h4>Location: </h4>
          <textarea
            ows="2"
            cols="35"
            disabled="disabled"
            id={id}
            value={course.location}
          ></textarea>
        </div>

        <div className="course-details__info">
          <h4>Summary: </h4>
          <textarea
            ows="2"
            cols="35"
            disabled="disabled"
            id={id}
            value={course.summary}
          ></textarea>
        </div>

        <div className="course-details__info">
          <h4>Price: </h4>
          <textarea
            ows="2"
            cols="35"
            disabled="disabled"
            id={id}
            value={course.price}
          ></textarea>
        </div>

        <div className="course-details__info">
          <h4>Teacher: </h4>
          <textarea
            ows="2"
            cols="35"
            disabled="disabled"
            id={id}
            value={course.teacher}
          ></textarea>
        </div>
      </div>
      <button className="backButton" onClick={returnToSearch}>
        Back to Search
      </button>
    </div>
  );
};

export default CourseCard;

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
      <h2>{course.name}</h2>
      <div className="course-card">
        <p>Syllabus: {course.syllabus}</p>
        <p>Category: {course.category}</p>
        <img
          width="50px"
          src={
            course.location === "online"
              ? onlineImage
              : course.location === "in person"
              ? inpersonImage
              : selfpacedImage
          }
          alt={course.location}
        ></img>
        <p>Start Date: {course.startdate}</p>
        <p>Start Time: {course.starttime}</p>
        <p>Duration: {course.duration}</p>
        <p>Location: {course.location}</p>
        <p>{course.summary}</p>
        <p>Price: {course.price}</p>
        <p>Teacher: {course.teacher}</p>
      </div>
      <button className="backButton" onClick={returnToSearch}>
        Back to Search
      </button>
    </div>
  );
};

export default CourseCard;

import "./Courses.scss";
import onlineImage from "../../assets/images/online_course_logo.png";
import inpersonImage from "../../assets/images/inperson_course_logo.png";
import selfpacedImage from "../../assets/images/self-paced_e-learning_logo.png";
import SearchBar from "../SearchBar/SearchBar";
import { useEffect, useState } from "react";

const Courses = () => {
  useEffect(() => {
    getCourses();
  }, []);

  const handleInput = (searchTerm) => {
    setSearchText(searchTerm);
  };

  const [searchText, setSearchText] = useState("");
  const [courses, setCourses] = useState([]);
  const [allCourses, setAllCourses] = useState([]);

  useEffect(() => {
    setCourses(
      allCourses.filter((course) => {
        const courseLowerCase = course.name.toLowerCase();
        if (courseLowerCase.indexOf(searchText) >= 0) {
          return true;
        } else {
          return false;
        }
      })
    );
  }, [searchText]);

  const getCourses = async () => {
    const url = "http://localhost:8080/api/courses";
    const response = await fetch(url);
    const data = await response.json();
    setCourses(data);
    setAllCourses(data);
  };

  return (
    <>
      <SearchBar handleInput={handleInput} />
      <div className="courseList">
        <h4 className="searchResult">Course Results...</h4>
        <div className="coursesSelection">
          {courses.map((course, index) => {
            return (
              <div className="courseCard">
                <h4>{course.name}</h4>
                <img
                  width="50px"
                  src={
                    course.location === "online"
                      ? onlineImage
                      : course.location === "in person"
                      ? inpersonImage
                      : selfpacedImage
                  }
                ></img>
                <p>{course.summary}</p>
                <p>* Start Date: {course.startdate}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Courses;

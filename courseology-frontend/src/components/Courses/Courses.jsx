import "./Courses.scss";
import courses from "../../data/courses";

const Courses = () => {
  return (
    <div className="courseList">
      <h4 className="searchResult">Course Results...</h4>
      <div className="coursesSelection">
        {courses.map((course, index) => {
          return (
            <div className="courseCard">
              <h4>{course.name}</h4>
              <p>{course.summary}</p>
              <p>* Start Date: {course.startDate}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Courses;

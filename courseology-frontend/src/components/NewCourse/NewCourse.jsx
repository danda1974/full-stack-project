import "./NewCourse.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const NewCourse = () => {
  const navigator = useNavigate();

  const [course, setCourse] = useState({});

  const handleInput = (property, e) => {
    let newCourse = { ...course, [property]: e.target.value };
    setCourse(newCourse);
  };

  const returnToSearch = () => {
    navigator("/");
  };

  const saveAndReturnToSearch = async () => {
    await fetch("http://localhost:8080/api/course", {
      method: "POST",
      body: JSON.stringify(course),
      headers: {
        "Content-Type": "application/json",
      },
    });
    navigator("/");
  };

  return (
    <div>
      <h3 className="headline">Add your course</h3>
      <div className="new-course-card">
        <div className="course-details__info">
          <h4>Name: </h4>
          <input
            type="text"
            value={course.name}
            onInput={(e) => {
              handleInput("name", e);
            }}
          ></input>
        </div>

        <div className="course-details__info">
          <h4>Syllabus: </h4>
          <input
            type="text"
            value={course.syllabus}
            onInput={(e) => {
              handleInput("syllabus", e);
            }}
          ></input>
        </div>

        <div className="course-details__info">
          <h4>Category: </h4>
          <input
            type="text"
            value={course.category}
            onInput={(e) => {
              handleInput("category", e);
            }}
          ></input>
        </div>

        <div className="course-details__info">
          <h4>Start Date: </h4>
          <input
            type="text"
            value={course.startdate}
            onInput={(e) => {
              handleInput("startdate", e);
            }}
          ></input>
        </div>

        <div className="course-details__info">
          <h4>Start Time: </h4>
          <input
            type="text"
            value={course.starttime}
            onInput={(e) => {
              handleInput("starttime", e);
            }}
          ></input>
        </div>

        <div className="course-details__info">
          <h4>Duration: </h4>
          <input
            type="text"
            value={course.duration}
            onInput={(e) => {
              handleInput("duration", e);
            }}
          ></input>
        </div>

        <div className="course-details__info">
          <h4>Location: </h4>
          <input
            type="text"
            value={course.location}
            onInput={(e) => {
              handleInput("location", e);
            }}
          ></input>
        </div>

        <div className="course-details__info">
          <h4>Summary: </h4>
          <input
            type="text"
            value={course.summary}
            onInput={(e) => {
              handleInput("summary", e);
            }}
          ></input>
        </div>

        <div className="course-details__info">
          <h4>Price: </h4>
          <input
            type="text"
            value={course.price}
            onInput={(e) => {
              handleInput("price", e);
            }}
          ></input>
        </div>

        <div className="course-details__info">
          <h4>Teacher: </h4>
          <input
            type="text"
            value={course.teacher}
            onInput={(e) => {
              handleInput("teacher", e);
            }}
          ></input>
        </div>
      </div>
      <button className="button" onClick={returnToSearch}>
        Cancel
      </button>
      <button className="button" onClick={saveAndReturnToSearch}>
        Save
      </button>
    </div>
  );
};

export default NewCourse;

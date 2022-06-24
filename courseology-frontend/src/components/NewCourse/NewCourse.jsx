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
      <div className="new-course-card">
        <h3>Add your course</h3>
        <p>
          Name:{" "}
          <input
            type="text"
            value={course.name}
            onInput={(e) => {
              handleInput("name", e);
            }}
          ></input>
        </p>
        <p>
          Syllabus:{" "}
          <input
            type="text"
            value={course.syllabus}
            onInput={(e) => {
              handleInput("syllabus", e);
            }}
          ></input>
        </p>
        <p>
          Category:{" "}
          <input
            type="text"
            value={course.category}
            onInput={(e) => {
              handleInput("category", e);
            }}
          ></input>
        </p>
        <p>
          Start Date:{" "}
          <input
            type="text"
            value={course.startdate}
            onInput={(e) => {
              handleInput("startdate", e);
            }}
          ></input>
        </p>
        <p>
          Start Time:{" "}
          <input
            type="text"
            value={course.starttime}
            onInput={(e) => {
              handleInput("starttime", e);
            }}
          ></input>
        </p>
        <p>
          Duration:{" "}
          <input
            type="text"
            value={course.duration}
            onInput={(e) => {
              handleInput("duration", e);
            }}
          ></input>
        </p>
        <p>
          Location:{" "}
          <input
            type="text"
            value={course.location}
            onInput={(e) => {
              handleInput("location", e);
            }}
          ></input>
        </p>
        <p>
          Summary:{" "}
          <input
            type="text"
            value={course.summary}
            onInput={(e) => {
              handleInput("summary", e);
            }}
          ></input>
        </p>
        <p>
          Price:{" "}
          <input
            type="text"
            value={course.price}
            onInput={(e) => {
              handleInput("price", e);
            }}
          ></input>
        </p>
        <p>
          Teacher:{" "}
          <input
            type="text"
            value={course.teacher}
            onInput={(e) => {
              handleInput("teacher", e);
            }}
          ></input>
        </p>
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

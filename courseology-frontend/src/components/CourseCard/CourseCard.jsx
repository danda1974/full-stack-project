import "./CourseCard.scss";

const CourseCard = () => {
  return (
    <div className="course-card">
      <h4>{course.name}</h4>
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
  );
};

export default CourseCard;

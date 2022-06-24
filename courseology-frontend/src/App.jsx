import "./App.scss";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import CourseCard from "./components/CourseCard/CourseCard";
import NewCourse from "./components/NewCourse/NewCourse";

const App = () => {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<Courses />} />
          <Route path="/course/:id" element={<CourseCard />} />
          <Route path="/newcourse/" element={<NewCourse />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;

import "./App.scss";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";

const App = () => {
  return (
    <div>
      <Header />
      <Router>
        <Route></Route>
      </Router>
      <Courses />
    </div>
  );
};

export default App;

import "./App.scss";
import Courses from "./components/Courses/Courses";
import Header from "./components/Header/Header";
import SearchBar from "./components/SearchBar/SearchBar";


const App = () => {


  return (
    <div>
      <Header />
      <SearchBar />
      <Courses />
    </div>
  )
}

export default App;
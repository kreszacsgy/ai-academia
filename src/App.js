import './App.css';
import Header from "./components/common/Heading/Header"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/Home/Home';
import About from './components/About/About';
import CourseHome from './components/Allcourses/CourseHome';
import Team from './components/Team/Team';



function App() {
  return (
    <>      
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/courses" element={<CourseHome />}/>
          <Route path="/team" element={<Team />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

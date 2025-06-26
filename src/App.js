import './App.css';
import Header from "./components/common/Heading/Header"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/Home/Home';
import About from './components/About/About';
import CourseHome from './components/Allcourses/CourseHome';
import Team from './components/Team/Team';
import Pricing from './components/Pricing/Pricing';



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
          <Route path="/pricing" element={<Pricing />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

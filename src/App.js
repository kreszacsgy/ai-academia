import './App.css';
import Header from "./components/common/Heading/Header"
import {BrowserRouter as Router, Routes, Route} from "react-router-dom"
import Home from './components/common/Home/Home';

function App() {
  return (
    <>      
      <Router>
        <Header/>
        <Routes>
          <Route path="/" element={<Home />}/>
        </Routes>
      </Router>
    </>
  );
}

export default App;

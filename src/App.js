import './App.css';
import Header from "./components/common/Heading/Header"
import {BrowserRouter as Router, Routes} from "react-router-dom"

function App() {
  return (
    <>      
      <Router>
        <Header/>
        <Routes>
          {/*<Route path="/about">
            <About/>
          </Route>*/}
        </Routes>
      </Router>
    </>
  );
}

export default App;

import './CSS/App.css'
import {BrowserRouter as Router, Routes,Route} from "react-router-dom";
import Home from './components/Home';
import Signup from './components/Signup';
import Login from './components/Login';
import About from './components/About';


function App() {
  return (
    <div className="App">
      <Router>
        <Routes>
          <Route path="/" element={<Home/>}/>
          <Route path="/signup" element={<Signup />}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/login" element={<Login/>}/>
          <Route path="/about" element={<About/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;

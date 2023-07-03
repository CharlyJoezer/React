import './App.css';
import {Routes, Route, Link} from 'react-router-dom'
import Home from './Home'
import About from './About'

function App() {
  return (
    <div className="App">
      <nav>
        <Link to="/">Home</Link>
        <Link to="About">About</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home />}/>
        <Route path="about" element={<About />}/>
      </Routes>
    </div>
  );
}

export default App;

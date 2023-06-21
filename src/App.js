import './App.css';
import Navbar from './components/Navbar.js'
import {BrowserRouter as Router, Route,Routes} from "react-router-dom"
import Home from './pages/Home'

function App() {
  return (
    <div className="App">
      <Router>
      <Navbar/>
      <Routes>
        <Route path="/" exact component={Home}></Route>
      </Routes>
      </Router>
    </div>
  );
}
export default App;

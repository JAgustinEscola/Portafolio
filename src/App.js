import './App.css';
import Details from './Views/Details/Details';
import Home from './Views/Home/Home';
import Landing from './Views/Landing/Landing';
import {Route, Routes} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' Component={Landing} />
        <Route exact path='/Home' Component={Home} />
        <Route path='/Details' Component={Details} />
      </Routes>
    </div>
  );
}

export default App;

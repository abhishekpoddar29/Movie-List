import './App.css';
import {Routes, Route} from "react-router-dom";
import Navbar from './components/Navbar';
import Favorite from './components/Favorite';
import MovieList from './components/movieList';


function App() {
  return (
    <div className="App">
      <Navbar/>
      <Routes>
        <Route path='/' element={<MovieList/>} />
        <Route path='/favorites' element={<Favorite/>} />
      </Routes>
      
    </div>
  );
}

export default App;

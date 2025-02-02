import './App.css';
import Home from "./Pages/Home"
import {Routes, Route } from 'react-router-dom';
import Beers from "./Pages/Beers";
import RandomBeer from "./Pages/RandomBeer";
import NewBeer from "./Pages/NewBeer";
import SingleBeer from "./Pages/SingleBeer";

function App() {
  return (
    <div className="App">
      <header className="App-header">
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/beers' element={<Beers/>}/>
        <Route path='/beers/:id' element={<SingleBeer/>}/>
        <Route path='/random-beer' element={<RandomBeer/>}/>
        <Route path='/new-beer' element={<NewBeer/>}/>
      </Routes>
      </header>
    </div>
  );
}

export default App;

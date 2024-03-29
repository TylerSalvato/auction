import logo from './logo.svg';
import './App.css';
import Home from './pages/home';
import Create from './pages/create';
import About from './pages/about';
import Auction from './pages/display';
import Item from './pages/item';
import Show from './pages/show';
import Navbar from './components/navbar';
import Footer from './components/footer';

import {BrowserRouter, Routes, Route} from 'react-router-dom';

import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.js";

function App() {
  return (
    <BrowserRouter>
    <div className="App">

      <Navbar/>
      
      <Routes>
        <Route path='/' element={<Home/>}></Route>
        <Route path='/create' element={<Create/>}></Route>
        <Route path='/about' element={<About/>}></Route>
        <Route path='/display' element={<Auction/>}></Route>
        <Route path='/item' element={<Item/>}></Route>
        <Route path='/show' element={<Show/>}></Route>
        
      </Routes>

      <Footer/>

    </div>
    </BrowserRouter>

  );
}

export default App;

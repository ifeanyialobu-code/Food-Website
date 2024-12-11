import React from "react";
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Home from "./Pages/Home";
import About from "./Pages/About";
import Contact from "./Pages/Contact"
import Menu from "./Pages/Menu"
import Pagenotfound from "./Pages/Pajenotfound";
import Posts from "./Pages/Posts";
import SinglePage from "./Pages/Posts";
import Register from "./Pages/Register";
function App() {
 return ( 
      <div>
        
      <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Register" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/menu" element={<Menu />} />
        <Route path="*" element={<Pagenotfound />} />
        <Route path="/Posts" element={<Posts />} />
        <Route path="Posts/:id" element={<SinglePage /> } />

      </Routes>
      </BrowserRouter>
      </div>
      )
};

export default App;

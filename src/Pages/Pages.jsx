import React from 'react';
import {List,Recipe,Main,Menu,Contact} from "./index";
import { Nav,End } from '../components';
import {Route,Routes , BrowserRouter} from "react-router-dom";

function Pages() {
  return (
    <BrowserRouter>
    <Nav />
    <Routes>
     <Route path='/' element={<Main />} />
      <Route path='/appone' element={<Main />} />
     <Route path='/Menu' element={<Menu />} />
     <Route path='/Recipe' element={<Recipe />} />
     <Route path='/Contact' element={<Contact />} />
     <Route path='/List/:type' element={<List />} />
     <Route path='/Recipe/:id' element={<Recipe />} />
    </Routes>
    <End />
    </BrowserRouter>
  );
}

export default Pages

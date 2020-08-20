import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
// import Footer from './components/Footer';
import BucketList from './components/BucketList';
import Add from './components/Add';
import Memory from './components/Memory';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => (
  <BrowserRouter>
    <div>
      <nav>
        <Navigation />
      </nav>
      <Route exact path="/"><Home /></Route>
      <Route path="/bucket-list"><BucketList /></Route>
      <Route path="/add"><Add /></Route>
      <Route path="/memory/:id"><Memory/></Route>
    </div>
  </BrowserRouter>
);

export default App;

import React from 'react';
import './App.css';
import { BrowserRouter, Route } from 'react-router-dom';
import Navigation from './components/Navigation';
import Home from './components/Home';
import BucketList from './components/BucketList';
import Add from './components/Add';
import Memory from './components/Memory';
import 'bootstrap/dist/css/bootstrap.min.css';
// authentication 
import { UnauthenticatedApp } from "./components/UnauthenticatedApp";
import { useAuth } from "./providers/auth-provider";



const App = () => {
  const { user } = useAuth()
  return user ? 
  <BrowserRouter>
    <div>
      <nav>
        <Navigation />
      </nav>
      <Route exact path="/"><Home /></Route>
      <Route path="/bucket-list"><BucketList /></Route>
      <Route path="/add"><Add /></Route>
      <Route component={Memory} path="/memory/:id"></Route>
    </div>
  </BrowserRouter> : <UnauthenticatedApp />
};

export default App;

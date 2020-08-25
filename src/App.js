import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// authentication 
import { UnauthenticatedApp } from "./components/UnauthenticatedApp";
import { useAuth } from "./providers/auth-provider";
//componnents
import Navigation from './components/Navigation';
import Home from './components/Home';
import BucketList from './components/BucketList';
import AddNewMemory from './components/AddNewMemory';
import Memory from './components/Memory';
import EditMemory from './components/EditMemory';



const App = () => {
  const { user } = useAuth()
  return user ?
    <BrowserRouter>
      <div>
        <nav>
          <Navigation />
        </nav>
        <Switch>
          <Route exact path="/"><Home /></Route>
          <Route path="/bucket-list"><BucketList /></Route>
          <Route path="/new"><AddNewMemory /></Route>
          <Route component={EditMemory} path="/memory/edit/:id"></Route>
          <Route component={Memory} path="/memory/:id"></Route>
        </Switch>
      </div>
    </BrowserRouter> : <UnauthenticatedApp />
};

export default App;

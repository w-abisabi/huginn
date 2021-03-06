import React from 'react';
import './App.css';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
// authentication
import { UnauthenticatedApp } from './components/UnauthenticatedApp';
import { useAuth } from './providers/auth-provider';
//componnents
import Navigation from './components/Navigation';
import Home from './components/Home';
import BucketList from './components/BucketList';
import AddNewMemory from './components/AddNewMemory';
import OnePlace from './components/OnePlace';
import Memory from './components/Memory';
import About from './components/About'
import EditMemory from './components/EditMemory';
import Footer from './components/Footer';

const App = () => {
  const { user } = useAuth();
  return user ? (
    <BrowserRouter>
      <div>
        <nav>
          <Navigation />
        </nav>
        <Switch>
          <Route path="/login">
            <Redirect to="/"/>
          </Route>
          <Route component={Home} exact path="/"></Route>
          <Route component={BucketList} path="/bucket-list"></Route>
          <Route component={AddNewMemory} path="/new"></Route>
          <Route component={OnePlace} path="/city/:city"></Route>
          <Route component={About} path="/about"></Route>
          <Route component={EditMemory} path="/memory/edit/:id"></Route>
          <Route component={Memory} path="/memory/:id"></Route>
        </Switch>
      </div>
      <Footer />
    </BrowserRouter>
  ) : (
    <UnauthenticatedApp />
  );
};

export default App;

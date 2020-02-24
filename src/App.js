import React from 'react';
import { Route,  Switch} from "react-router-dom"
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css";
import Login from './components/Login'
import ProtectedRoute from './components/ProtectedRoute'
import Productlist from './components/Productlist';
import Details from './components/Details';
import Cart from './components/Cart';
import Default from './components/Default';

function App() {
  return (
    <React-Fragment>

      <Switch>
        <Route exact path="/" component={Login} />
        <ProtectedRoute exact path="/productlist" component={Productlist} />
        <Route path="/details" component={Details} />
        <Route path="/cart" component={Cart} />
        <Route component={Default} />
      </Switch>
</React-Fragment>
  );
}

export default App;

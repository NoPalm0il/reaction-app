import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
//import roles from "../configs/roles";
import NavbarComponent from "../components/global/Navbar";

import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import About from "../pages/about/About";
import Profile from "../pages/profile/Profile";
import CreateMeme from "../pages/meme/CreateMeme";
import NullPage from "../pages/nullpage/Nullpage";
import Cars from "../pages/categories/Cars";
import Cool from "../pages/categories/Cool";
import Funny from "../pages/categories/Funny";
import Gaming from "../pages/categories/Gaming";
import Hot from "../pages/categories/Hot";
import Politics from "../pages/categories/Politics";
import Sports from "../pages/categories/Sports";
import Tech from "../pages/categories/Tech";


export default class RouterComponent extends React.Component {
  render() {
    //const { user, logout } = this.context;
    return (
        <Router>
          <NavbarComponent />
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route exact path="/about" component={About} />
            <Route exact path="/crmeme" component={CreateMeme} />
            <Route exact path="/profile" component={Profile} />
            <Route exact path="/cars" component={Cars} />
            <Route exact path="/cool" component={Cool} />
            <Route exact path="/funny" component={Funny} />
            <Route exact path="/gaming" component={Gaming} />
            <Route exact path="/hot" component={Hot} />
            <Route exact path="/politics" component={Politics} />
            <Route exact path="/sports" component={Sports} />
            <Route exact path="/tech" component={Tech} />
            <Route path="*" component={NullPage} />
          </Switch>
        </Router>
    );
  }
}

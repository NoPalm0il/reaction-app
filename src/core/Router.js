import React from "react";
import { HashRouter as Router, Switch, Route } from "react-router-dom";
//import roles from "../configs/roles";
import NavbarComponent from "../components/global/Navbar";

import Home from "../pages/home/Home";
import Login from "../pages/login/Login";
import Register from "../pages/register/Register";
import About from "../pages/about/About";
import Meme from "../pages/meme/Meme";
import Profile from "../pages/profile/Profile";
import CreateMeme from "../pages/meme/CreateMeme";
import NullPage from "../pages/nullpage/Nullpage";

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
            <Route exact path="/meme/:id" component={Meme} />
            <Route exact path="/crmeme" component={CreateMeme} />
            <Route exact path="/profile" component={Profile} />
            <Route path="*" component={NullPage} />
          </Switch>
        </Router>
    );
  }
}

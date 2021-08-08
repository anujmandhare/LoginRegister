import React, { Component } from "react";
import Login from "./Forms/LoginForm";
import Register from "./Forms/RegisterForm";
import Welcome from "./Forms/Welcome";
import { Route, Switch } from "react-router-dom";

class BodyComponent extends Component {
  render() {
    return (
      <div id="bodycomponent">
        <Switch>
          <Route exact path="/login" component={Login}></Route>
          <Route exact path="/register" component={Register}></Route>
          <Route exact path="/" component={Welcome}></Route>
        </Switch>
      </div>
    );
  }
}

export default BodyComponent;

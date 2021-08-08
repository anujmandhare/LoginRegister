import { NavLink, Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { useEffect, useState } from "react";

const Header = ({ state }) => {
  if (state?.error) alert(state.error);
  return (
    <div id="header">
      {!state.username && (
        <ul id="linklist">
          <li>
            <NavLink exact to="/login" activeClassName="activeLink">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink exact to="/register" activeClassName="activeLink">
              Register
            </NavLink>
          </li>
        </ul>
      )}
      {state.username && (
        <div id="displayname">
          Welcome {state.username}!
          <ul>
            <li>
              <NavLink exact to="/login" activeClassName="activeLink">
                Sign Out
              </NavLink>
            </li>
          </ul>
        </div>
      )}
      {state.success ? <Redirect to="/"></Redirect> : null}
    </div>
  );
};

const mapStateToProps = (state) => ({ state: state.mainReducer });

export default connect(mapStateToProps)(Header);

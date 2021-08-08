import React from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import profilepic from "../../profilepic.jfif";

// And now we can use these
const WelcomeForm = (props) => {
  // console.log("Welcome ", props);
  return (
    <>
      <form>
        {props && props.username ? (
          <>
            {"Welcome " + props?.username}
            <div>
              <img src={profilepic} alt="Profile Pic"></img>
            </div>
          </>
        ) : (
          <Redirect to="/login"></Redirect>
        )}
      </form>
    </>
  );
};

const mapStateToProps = (state) => {
  // console.log("Welcome mapStateToProps", state.mainReducer);
  return state.mainReducer;
};

export default connect(mapStateToProps)(WelcomeForm);

import React, { Component } from "react";
import * as Yup from "yup";
import { Formik, Form } from "formik";
import { MyTextInput, ButtonComponent } from "./CustomResusableComps";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { login, clearAllCookies } from "../../actioncreators/ActionCreators";

class LoginForm extends Component {
  constructor(props) {
    super(props);
    // console.log("Login From props", props);
    this.props.clearAllCookies();
  }

  render() {
    return (
      <>
        <Formik
          initialValues={{
            email: "",
            password: "",
          }}
          validationSchema={Yup.object({
            email: Yup.string().email("Invalid email address").required(),
            password: Yup.string().required(),
          })}
          onSubmit={async (values, formik) => {
            // console.log("Login Submit ", values, formik);
            this.props.login({
              username: values.email,
              email: values.email,
              password: values.password,
            });
          }}
        >
          <Form className="container-fluid">
            <div id="card">
              <h1>Login!</h1>
              <MyTextInput
                label="Email"
                name="email"
                type="email"
                placeholder="jane@formik.com"
              />

              <MyTextInput
                label="Password"
                name="password"
                type="password"
                placeholder="password"
              />

              <ButtonComponent />
            </div>
          </Form>
        </Formik>
      </>
    );
  }
}

const mapStateToProps = (state) => ({ state: state.mainReducer });
const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({ login, clearAllCookies }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

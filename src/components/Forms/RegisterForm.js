import React from "react";
import { Formik, Form } from "formik";
import * as Yup from "yup";
import { MyTextInput, ButtonComponent } from "./CustomResusableComps";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { register } from "../../actioncreators/ActionCreators";

class SignupForm extends React.Component {
  render() {
    return (
      <>
        <Formik
          initialValues={{
            firstName: "",
            lastName: "",
            email: "",
            password: "",
            confirmpassword: "",
          }}
          validationSchema={Yup.object({
            firstName: Yup.string()
              .max(15, "Must be 15 characters or less")
              .required("Required"),
            lastName: Yup.string()
              .max(20, "Must be 20 characters or less")
              .required("Required"),
            email: Yup.string()
              .email("Invalid email addresss`")
              .required("Required"),
            password: Yup.string().required("Required"),
            confirmpassword: Yup.string()
              .oneOf([Yup.ref("password"), null], "Password do not match!")
              .required("Required"),
          })}
          onSubmit={async (values, formik) => {
            // console.log("Submitted", values, formik);
            this.props.register({
              username: values.firstName,
              email: values.email,
              password: values.password,
            });
            formik.setSubmitting(false);
          }}
        >
          <Form className="container-fluid">
            <div id="card">
              <h1>Register!</h1>
              <MyTextInput
                label="First Name"
                name="firstName"
                type="text"
                placeholder="Jane"
              />
              <MyTextInput
                label="Last Name"
                name="lastName"
                type="text"
                placeholder="Doe"
              />
              <MyTextInput
                label="Email Address"
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

              <MyTextInput
                label="Confirm Password"
                name="confirmpassword"
                type="password"
                placeholder="Confirm password"
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
  return bindActionCreators({ register }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);

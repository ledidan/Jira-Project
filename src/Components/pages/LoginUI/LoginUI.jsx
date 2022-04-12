import React from "react";
import { withFormik } from "formik";
import { Input, Button } from "antd";
import * as Yup from "yup";
import { connect } from "react-redux";

import {
  UserOutlined,
  LockOutlined,
  FacebookOutlined,
  GoogleOutlined,
  AppleOutlined,
} from "@ant-design/icons";
import { USER_SIGNIN_API } from "../../../redux/constants/JiraConstants";
import { SIGNIN_ACTION } from "../../../redux/actions/JiraActions";

function LoginUI(props) {
  const { values, touched, errors, handleChange, handleBlur, handleSubmit } =
    props;

  return (
    <form
      onSubmit={handleSubmit}
      className="container"
      style={{ height: window.innerHeight }}
    >
      <div
        className="d-flex flex-column justify-content-center align-items-center"
        style={{ height: window.innerHeight }}
      >
        <h3 className="text-center text-dark">Log in to continue</h3>
        <div className="d-flex mt-3">
          <Input
            onChange={handleChange}
            style={{ width: "100%", minWidth: 300 }}
            size="large"
            type="email"
            placeholder="Email"
            name="email"
            prefix={<UserOutlined />}
          />
        </div>

        <div className="text-danger">{errors.email}</div>

        <div className="d-flex mt-3">
          <Input
            onChange={handleChange}
            style={{ width: "100%", minWidth: 300 }}
            size="large"
            type="password"
            placeholder="Password"
            name="password"
            prefix={<LockOutlined />}
          />
        </div>
        <div className="text-danger">{errors.password}</div>
        <Button
          htmlType="submit"
          type="primary"
          size="large"
          style={{ width: "27%", minWidth: 300 }}
          className="mt-3"
        >
          Login
        </Button>
        <small className="mt-3">OR</small>
        <div className="social mt-3 d-flex flex-column">
          <Button
            style={{ width: "27%", minWidth: 300 }}
            className="d-flex align-items-center justify-content-center"
            type="default"
            icon={<FacebookOutlined style={{ fontSize: "20px" }} />}
            size="large"
          >
            Continue with Facebook
          </Button>
          <Button
            style={{ width: "27%", minWidth: 300 }}
            className="mt-3 d-flex align-items-center justify-content-center"
            type="ghost"
            icon={<GoogleOutlined style={{ fontSize: "20px" }} />}
            size="large"
          >
            Continue with Google
          </Button>
          <Button
            style={{ width: "27%", minWidth: 300 }}
            className="mt-3 d-flex align-items-center justify-content-center"
            type="default"
            icon={<AppleOutlined style={{ fontSize: "20px" }} />}
            size="large"
          >
            Continue with Apple
          </Button>
        </div>
      </div>
    </form>
  );
}
const LoginJiraWithFormik = withFormik({
  mapPropsToValues: () => ({
    email: "",
    password: "",
  }),
  validationSchema: Yup.object().shape({
    email: Yup.string().required("Email is required").email("Email invalid"),
    password: Yup.string()
      .min(6, "Password must have min 6 characters")
      .max(32, "Password must not have max 32 characters"),
  }),
  handleChange: (e) => {
    console.log(e);
  },

  handleSubmit: (values, { props, setSubmitting }) => {
    props.dispatch(SIGNIN_ACTION(values.email, values.password));
  },

  displayName: "Log in to continue",
})(LoginUI);

export default connect()(LoginJiraWithFormik);

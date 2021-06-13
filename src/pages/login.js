import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { Form, Button } from "react-bootstrap";
import { login } from "../redux/actions/authAction";
import { connect } from "react-redux";

function Login(props) {

  const { isLoggedIn, message } = props;

  const [btnStatus, setBtnStatus] = useState(false);

  const [user, setUser] = useState({
    username: "",
    password: "",
    loading: false,
  });

  if (isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }

  const onChangeUsername = (e) => {
    setUser((prevState) => ({
      ...prevState,
      username: e.target.value,
    }));
  };

  const onChangePassword = (e) => {
    setUser((prevState) => ({
      ...prevState,
      password: e.target.value,
    }));
  };

  const handleLogin = (e) => {
    e.preventDefault();
    setBtnStatus(true);
    setUser({
      loading: true,
    });

    const { dispatch, history } = props;

    dispatch(login(user.username, user.password))
      .then(() => {
        history.push("/dashboard");
        //window.location.reload();
      })
      .catch(() => {
        setUser({
          loading: false,
        });
      });
  };

  return (
    <div className="container" >
      <div className="d-flex min-vh-100 justify-content-center align-items-center w-100 flex-column">
        <div className="card m-3 col-5 p-0">
          <div className="text-container">
            <h3 className="card-header">Login</h3>
            <div className="card-body">
              <Form onSubmit={(e) => handleLogin(e)}>
                <Form.Group className="mb-3" controlId="formBasicUsername">
                  <Form.Label>Username</Form.Label>
                  <Form.Control
                    type="text"
                    placeholder="Enter username"
                    name="username"
                    onChange={(e) => onChangeUsername(e)}
                  />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                  <Form.Label>Password</Form.Label>
                  <Form.Control
                    type="password"
                    placeholder="Password"
                    autoComplete="on"
                    onChange={(e) => onChangePassword(e)}
                  />
                </Form.Group>

                <button className="btn btn-primary d-flex justify-content-between align-items-center" disabled={btnStatus}>
                  {btnStatus ? <div className="loader"></div> : ''}
                    Login
                </button>
              </Form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { isLoggedIn } = state.auth;
  const { message } = state.message;
  return {
    isLoggedIn,
    message,
  };
}

export default connect(mapStateToProps)(Login);

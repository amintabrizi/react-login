import React, { useState } from 'react';
import { Redirect } from 'react-router-dom';
import { Form, Button } from 'react-bootstrap';
import { register } from '../redux/actions/authAction';
import { connect } from "react-redux";


function Register(props) {

  const [user, setUser] = useState({
    username: "",
    email: "",
    password: "",
    successful: false,
  })

  const onChangeUsername = (e) => {
    setUser(prevState => ({
        ...prevState,
      username: e.target.value
    })
    )
  }

  const onChangeEmail = (e) => {
    setUser(prevState => ({
      ...prevState,
      email: e.target.value
    })
    )
  }

  const onChangePassword = (e) => {
    setUser(prevState => ({
      ...prevState,
      password: e.target.value
    })
    )
  }

  const handleRegister = (e) => {
    e.preventDefault();
    console.log(user);
    props.dispatch(
      register(user.username, user.email, user.password)
    )
      .then(() => {
        setUser({
          successful: true,
        });
      })
      .catch(() => {
        setUser({
          successful: false,
        });
      });
  }

  return (
    <>
      <div className="d-flex min-vh-100 justify-content-center align-items-center">
        <Form
          onSubmit={(e) => handleRegister(e)}
        >
          {(!user.successful)
            ?
            <>
              <Form.Group className="mb-3" controlId="formBasicUsername">
                <Form.Label>Username</Form.Label>
                <Form.Control type="text" placeholder="Enter username" name="username"
                  
                  onChange={(e) => onChangeUsername(e)} />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Label>Email address</Form.Label>
                <Form.Control type="email" placeholder="Enter email"
                  onChange={(e) => onChangeEmail(e)} />
                <Form.Text className="text-muted">
                  We'll never share your email with anyone else.
              </Form.Text>
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Password</Form.Label>
                <Form.Control type="password" placeholder="Password" autoComplete="on"
                  onChange={(e) => onChangePassword(e)} />
              </Form.Group>

              <Button variant="primary" type="submit">
                Sign UP
              </Button>
            </>
            :
            <>
              {/* <Redirect to="/confirm/" /> */}
              confirm
            </>
          }

        </Form>
      </div>
    </>
  );
}


export default connect()(Register);
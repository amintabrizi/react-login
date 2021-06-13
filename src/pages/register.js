import React, { useState, useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import { Form } from 'react-bootstrap';
import { registerAction } from '../redux/actions/authAction';
import { connect } from "react-redux";

function Register(props) {


  const [user, setUser] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    successful: false,
  });

  const [btnStatus, setBtnStatus] = useState(false);

  useEffect(() => {
    function checkUserData() {
      const item = localStorage.getItem('user')

      if (item) {
        window.location.replace("/dashboard");
      }
    }

    window.addEventListener('storage', checkUserData)

    return () => {
      window.removeEventListener('storage', checkUserData)
    }
  }, [])

  if (props.isLoggedIn) {
    return <Redirect to="/dashboard" />;
  }


  const onChangeFirstName = (e) => {
    setUser(prevState => ({
      ...prevState,
      firstName: e.target.value
    })
    )
  }

  const onChangeLastName = (e) => {
    setUser(prevState => ({
      ...prevState,
      lastName: e.target.value
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
    setBtnStatus(true);
    props.dispatch(
      registerAction(user.firstName, user.lastName, user.email, user.password)
    )
      .then(() => {
        setUser(prevState => ({
          ...prevState,
          successful: true
        })
        )
      })
      .catch((err) => {
        setUser(prevState => ({
          ...prevState,
          successful: false
        })
        )
      });
  }

  const handleUndo = () => {
    setUser({ successful: false });
    setBtnStatus(false)
  }

  return (
    <div className="container" >
      <div className="d-flex min-vh-100 justify-content-center align-items-center w-100 flex-column">
        <div className="card m-3 col-8 p-0">
          {
            (user.successful && props.message)
              ?
              <div className="text-container">
                <h3 className="card-header">Verifying</h3>
                <div className="card-body">
                  <span aria-hidden="true" className="geist-spacer"></span>
                  <p className="geist-text geist-text-no-margin p">
                    <b>Do not close this window until opening the email link.</b>
                  </p>
                  <span aria-hidden="true" className="geist-spacer"></span>
                  <p className="geist-themed geist-secondary geist-text geist-text-no-margin p">
                    We just sent an email to
                    <b> {user.email} </b>
                    (<span className="text-primary pointer" onClick={handleUndo}>undo</span>)
                  </p>
                </div>
              </div>
              :
              <Form onSubmit={(e) => handleRegister(e)}>
                <h3 className="card-header">Register</h3>
                <div className="card-body">
                  <div className="form-row">
                    <div className="form-group col-6">
                      <label>First Name</label>
                      <input name="firstName" onChange={(e) => onChangeFirstName(e)} value={user.firstName || ""} type="text" className={'form-control'} />
                    </div>
                    <div className="form-group col-6">
                      <label>Last Name</label>
                      <input name="lastName" onChange={(e) => onChangeLastName(e)} value={user.lastName || ""} type="text" className={'form-control'} />
                    </div>
                  </div>
                  <div className="form-group">
                    <label>Email</label>
                    <input name="email" onChange={(e) => onChangeEmail(e)} value={user.email || ""} type="text" className={'form-control'} />
                  </div>
                  <div className="form-row">
                    <div className="form-group col">
                      <label>Password</label>
                      <input name="password" onChange={(e) => onChangePassword(e)} type="password" className={'form-control'} autoComplete="on" />
                    </div>
                  </div>
                  <div className="form-group">
                    <button className="btn btn-primary d-flex justify-content-between align-items-center" disabled={btnStatus}>
                      {btnStatus ? <div className="loader"></div> : ''}
                    Register
                    </button>
                  </div>
                </div>
              </Form>
          }

        </div>
      </div>
    </div >
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

export default connect(mapStateToProps)(Register);
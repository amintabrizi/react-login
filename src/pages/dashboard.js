import React, { useState } from "react";
import { connect } from "react-redux";
import { logout } from '../redux/actions/authAction';
import { Redirect } from 'react-router-dom';


function Dashboard(props) {

  const [btnStatus, setBtnStatus] = useState(false);

  if (!props.isLoggedIn) {
    return <Redirect to="/login" />;
  }

  const logOutHandle = () => {
    setBtnStatus(true);
    props.dispatch(logout());
  }

  return (
    <div className="container" >
      <div className="d-flex min-vh-100 justify-content-center align-items-center w-100 flex-column">
        <div className="card m-3 col-8 p-0">
          <div className="text-container">
            <h3 className="card-header">Dashboard</h3>
            <div className="card-body">
              <p>Name: {props.user.firstName + ' ' + props.user.lastName}</p>
              <p>Email: {props.user.email}</p>
              <p>Token: {props.user.jwtToken}</p>
              <button onClick={logOutHandle} className="btn btn-danger d-flex justify-content-between align-items-center" disabled={btnStatus}>
                {btnStatus ? <div className="loader"></div> : ''}
                  Logout
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function mapStateToProps(state) {
  const { user, isLoggedIn } = state.auth;
  return {
    user,
    isLoggedIn
  };
}

export default connect(mapStateToProps)(Dashboard);

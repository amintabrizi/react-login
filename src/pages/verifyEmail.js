import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import queryString from "query-string";
import { connect } from "react-redux";
import { verifyEmailAction } from "../redux/actions/authAction";
//import AuthService from "./../services/auth.service";

function VerifyEmail(props) {

  const EmailStatus = {
    Verifying: "Verifying",
    Failed: "Failed",
  };

  const [emailState, setEmailState] = useState(EmailStatus.Failed);

  useEffect(() => {

    const { token } = queryString.parse(props.location.search);

    if (token) {

      setEmailState(EmailStatus.Verifying);

      // remove token from url to prevent http referer leakage
      props.history.replace(props.location.pathname);

      props.dispatch(
        verifyEmailAction(token)
      )
        .then(() => {
          props.history.push("login");
        })
        .catch(() => {
          setEmailState(EmailStatus.Failed);
        });
    }

  }, []);

  const getBody = () => {
    if (emailState === EmailStatus.Verifying) {
      return <div className="d-flex justify-content-center flex-column align-items-center"><div className="big-loader"></div><div className="mt-3"><strong>Verifying...</strong></div></div>;
    } else if (emailState === EmailStatus.Failed) {
      return <div>Verification failed, you can also verify your account using the <Link to="forgot-password">forgot password</Link> page.</div>;
    } else {
      return <div>Something is wrong...</div>;
    }
  }

  return (
    <div className="container" >
      <div className="d-flex min-vh-100 justify-content-center align-items-center w-100 flex-column">
        <div className="card m-3 col-8 p-0">
          <div className="text-container">
            <h3 className="card-header">Verifying Status</h3>
            <div className="card-body">
              {getBody()}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default connect()(VerifyEmail);

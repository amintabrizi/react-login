import React from "react";

function Home(props) {

  return (
    <div className="container" >
      <div className="d-flex min-vh-100 justify-content-center align-items-center w-100 flex-column">
        <div className="card m-3 col-8 p-0">
          <div className="text-container">
            <h3 className="card-header">Home Page</h3>
            <div className="card-body">
              <p>This is home page</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Home;

import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

//components
import Header from './components/header';
import Register from './pages/register';
import Confirm from './pages/confirm';


function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Route path="/" exact >
            <div className="d-flex min-vh-100 justify-content-center align-items-center">
              this is home page
            </div>
          </Route>
          <Route path="/register" component={Register} />
          <Route path="/confirm" component={Confirm} />
        </main>
      </div>
    </Router>
    
  );
}

export default App;

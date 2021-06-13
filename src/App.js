import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from 'react-router-dom';

//components
import Header from './components/header';
import Home from './pages/home';
import Register from './pages/register';
import VerifyEmail from './pages/verifyEmail';
import Login from './pages/login';
import Dashboard from './pages/dashboard';

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <main>
          <Route path="/" exact component={Home} />
          <Route path="/register" component={Register} />
          <Route path="/verify-email" component={VerifyEmail} />
          <Route path="/login" component={Login} />
          <Route path="/dashboard" component={Dashboard} />
        </main>
      </div>
    </Router>

  );
}

export default App;

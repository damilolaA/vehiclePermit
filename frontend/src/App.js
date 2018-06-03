import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import ApplicantRegister from './components/ApplicantRegister';
import ApplicantLogin from './components/ApplicantLogin';
import ApplicantDashboard from './components/ApplicantDashboard';
import ReviewerRegister from './components/ReviewerRegister';
import ReviewerLogin from './components/ReviewerLogin';

const App = () => (
  <BrowserRouter>
    <div className="App">
      <Switch>
        <Route exact path="/" component={LandingPage} />
        <Route path="/register" component={ApplicantRegister}/>
        <Route path="/login" component={ApplicantLogin}/>
        <Route path="/dashboard" component={ApplicantDashboard}/>
        <Route path="/reviewerRegister" component={ReviewerRegister}/>
        <Route path="/reviewerLogin" component={ReviewerLogin}/>
      </Switch>
    </div>
  </BrowserRouter>
);

export default App;

import React from 'react';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Navbar  from './components/layout/Navbar';
import Dashborad from './components/dashboard/Dashboard';
import projectDetails from './components/projects/projectDetails';
import Signin from './components/auth/Signin'; 
import Signout from './components/auth/Signup';
import CreateProject from './components/projects/CreateProject';

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Navbar />
          <Switch>
            <Route exact path='/' component={Dashborad} />
            <Route path='/project/:id' component={projectDetails} />
            <Route path='/signin' component={Signin} />   
            <Route path='/signup' component={Signout} />   
            <Route path='/create' component={CreateProject} />   

          </Switch>
      </div>
    </BrowserRouter>
  );
}

export default App;

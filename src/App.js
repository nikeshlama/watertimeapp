import React from 'react';
import {Container} from 'reactstrap';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import "bootstrap/dist/css/bootstrap.min.css";

import Login from './components/Login';
import Register from './components/Register'
import ReminderList from './components/Reminder-List';
import EditReminder from './components/Edit-Reminder';
import CreateReminder from './components/Create-Reminder';
import Createuser from './components/CreateUser';

function App() {
  return (
   <Container>
      <BrowserRouter>
        <Switch>
          <Route exact path='/' component={Login} />
          <Route path='/register' component={Register}/>
          <Route path='/reminder' component={ReminderList}/>
          <Route path='/edit' component={EditReminder}/>
          <Route path='/create' component={CreateReminder}/>
          <Route path='/user' component={Createuser}/>
        </Switch>
      </BrowserRouter>

    </Container>
  );
}

export default App;

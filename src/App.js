import React from 'react';
import { Switch, Route, Link, NavLink, BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/shared/Navbar';

import ReservationShow from './components/reservations/ReservationShow';
import Rooms from './components/reservations/Rooms';
import MakeReservation from './components/reservations/MakeReservation';
import Confirmation from './components/reservations/Confirmation';


const App = () => (
  <>
    
      {/* <Container> */}
        <Switch>
          <Route exact path='/' component={ReservationShow} />
          <Route exact path='/rooms' component={Rooms} />
          <Route exact path='/makereservation' component={MakeReservation} />
          <Route exact path='/confirmation' component={Confirmation} />
{/* routes for sttis psages with footer */}
         
        </Switch>
      {/* </Container> */}
  </>
)

export default App;

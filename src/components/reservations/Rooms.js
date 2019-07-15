import React, { Component } from 'react';
import BreadcrumbNav from './BreadcrumbNav';
import { Image } from 'semantic-ui-react';


class Rooms extends Component {


  render() {
    return (
    <>
      <header>
      <h1>Reservation</h1>
      <p>Lorem Ipsum is simply dummy text of the printing</p>
    </header>
    <BreadcrumbNav />
  <div class="roomh1">
      <h1>Available Rooms</h1>
      <center>
          <Image src='https://images.unsplash.com/photo-1506974210756-8e1b8985d348?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1300&q=80' size="medium"/>
         </center>
 </div>
</>
    )
    }
  }



export default Rooms;
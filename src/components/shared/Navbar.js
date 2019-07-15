import React, { Component } from 'react';
import { Menu, Image, Container } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { withRouter } from 'react-router-dom';

import { HashLink } from 'react-router-hash-link';


class Navbar extends Component {



  render() {
    return(
      <Menu secondary className="navbar">
        <Container>
        <Menu.Item className="navbar_item">
          <Image src = '../../../images/TN_horizontal_white_transparent-p-500.png' size='tiny'/>
        </Menu.Item>
        <Menu.Item className="navbar_item">
          <HashLink smooth to="/#home">HOME</HashLink>
        </Menu.Item>
        <Menu.Item className="navbar_item">
          <HashLink smooth to="/#room_rate">ROOM & RATE</HashLink>
        </Menu.Item>
        <Menu.Item className="navbar_item">
          <Link to="/reservation">RESERVATION</Link>
        </Menu.Item>
        <Menu.Item className="navbar_item">
          <HashLink smooth to="/#gallery">GALLERY</HashLink>
        </Menu.Item>
        <Menu.Item className="navbar_item">
          <HashLink smooth to="/#about">ABOUT</HashLink>
        </Menu.Item>
        <Menu.Item className="navbar_item">
          <Link to="/contact">CONTACT</Link>
        </Menu.Item>
        </Container>
      </Menu>

    )
  }
}

export class ConnectedNavbar extends Component {
  render() {
    return(
     <>
     </>
    )
  }
}

export default withRouter(ConnectedNavbar);
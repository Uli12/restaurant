import React from 'react';
import { NavLink } from 'react-router-dom';
import { Menu } from 'semantic-ui-react';

const styles = {
  activeNav: {
    textDecoration: 'underline',
    color: 'black',
  },
}

const Navbar = () => (
  <Menu>
    <Menu.Item name='Menu'>
      <NavLink exact activeStyle={styles.activeNav} to='/'>Menu</NavLink>
    </Menu.Item>
    <Menu.Item name='About'>
      <NavLink activeStyle={styles.activeNav} to='/about'>About</NavLink>
    </Menu.Item>
  </Menu>
)

export default Navbar;
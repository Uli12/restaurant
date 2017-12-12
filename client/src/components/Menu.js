import React from 'react';
import MenuItem from './MenuItem';
import { Segment, Header } from 'semantic-ui-react';

const Menu = {
render() {
    return(
  <Segment basic>
    <Header as='h1'>Chez Michael's Fancy Restaurant Menu</Header>
    <MenuItem />
  </Segment>
    )}
  }

export default Menu;
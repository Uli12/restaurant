import React, { Component } from 'react';
import { Segment, Header, List, Button } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import Menu from './Menu';
import axios from 'axios';

class MenuItem extends Component {
  state = { menuItems: [] };

  componentDidMount(){
    axios.get('api/menu')
    .then = ( res => {
      console.log(res);
    })
    .catch = ( err => {
      console.log(err);
    });
  }

displayMenuItem = () => {
    const { id, name, price, description } = this.state.menuItem;

    return(
      <Segment basic>
        <Header as='h1'>{name}</Header>
        <List>
          <List.Item>Price: {price}</List.Item>
          <List.Item>Description: {description}</List.Item>
        </List>
        <Button as={Link} to={`/menu/${id}/edit`} color='orange'>Edit</Button>
        <Button color='red' onClick={this.deleteProduct}>Delete</Button>
        <Button as={Link} to='/menu'>All Menu Items</Button>
      </Segment>
    )}
  
};


export default MenuItem;
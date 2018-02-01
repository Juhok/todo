import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import { Navbar, Nav, NavItem, MenuItem, Grid, NavDropdown, Row, Button, Form, ControlLabel, ButtonToolbar, FormControl, FormGroup} from 'react-bootstrap';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userInput: '',
      list: []
    }
  }
  changeUserInput(input){
    this.setState({
      userInput: input


    });
  }

  addToList(input){
    let listArray = this.state.list;

    listArray.push(input);

    this.setState({
      list: listArray,
      userInput: ''
    })
  }

  render() {
    return (


      <div className ="App"> 

      <Navbar>
      <Navbar.Header>
      <Navbar.Brand>
      <a href="#home">Juho's Task-list</a>
      </Navbar.Brand>
      </Navbar.Header>
   

      </Navbar>

      <div class="col-md-6 col-md-offset-3">

      <br />

      <div class="well" data-reactid=".0">          
      <h1 class="vert-offset-top-0" data-reactid=".0.0">To do:</h1>


      <Form inline>
      <FormGroup controlId="form-horizontal">
      <ControlLabel>Task</ControlLabel>{' '}
      <FormControl onChange={ (e)=>this.changeUserInput(e.target.value) } 
      value={this.state.userInput} type="text" placeholder="What to do?" />
      </FormGroup>{' '}
      <Button type="submit" bsStyle="primary" onClick={()=> this.addToList(this.state.userInput) } >Save Item</Button>
      </Form>

      <hr></hr>

      <ul class="list-group">
      {this.state.list.map( (val)=> <li class="list-group-item clerfix"> <span> {val} </span></li>) }
      </ul>

      <hr></hr>

      <Form inline>
      <FormGroup controlId="form-horizontal">
      <ControlLabel>Task</ControlLabel>{' '}
      <FormControl onChange={ (e)=>this.changeUserInput(e.target.value) } 
      value={this.state.userInput} type="text" class="form-control" placeholder="What to do?" />
      </FormGroup>{' '}
      <Button type="submit" bsStyle="primary" onClick={()=> this.addToList(this.state.userInput) } >Save Item</Button>
      </Form>

      </div>
      </div>
      </div>
      );
    }
  }


  export default App;
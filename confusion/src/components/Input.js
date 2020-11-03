import React,{Component} from 'react';

import {Data} from './Data'
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router";


import Studentform from './forms/Student';
import Studentfee from './forms/Fee';
import UserDetails from './forms/UserDetails';

class Input extends Component{
  constructor(props){
    super(props);
    this.state={
      data:Data,
      current:Data[0]
    };
  }
 switch(val){
   this.setState({current:val});
 }
  render(){
    const item=this.state.data.map((dish)=>{
      return(
        <li class="nav-item" ><a class="nav-link"  onClick={()=>this.switch(dish)}>{dish.name}</a></li>
      );

    })
    return(
      <div class="container">
        <div class="row">
          <nav class="navbar navbar-dark navbar-expand-sm bg-primary fixed-top" >
              <div class="container">
                <ul class="navbar-nav mr-auto">
                  <li class="nav-item" ><NavLink className="nav-link"  to='/Studentform'>student_detail</NavLink></li>
                  <li class="nav-item" ><NavLink className="nav-link"  to='/Studentfee'>fee_detail</NavLink></li>
                  <li class="nav-item"><NavLink className="nav-link" to='/user_details'>user_details</NavLink></li>
                </ul>
              </div>
          </nav>
        </div>
      <div class="spacer"></div>
        <Switch>
          <Route exact path='/Studentform' component={()=> <Studentform  />} />
          <Route exact path='/Studentfee' component={() => <Studentfee />} />
          <Route exact path='/user_details' component={() => <UserDetails />} />
          <Redirect to="/Studentform" />
        </Switch>
      </div>
    );
  }
}

export default withRouter(connect(null)(Input));

import React,{Component} from 'react';
import { Navbar,NavItem, NavbarBrand } from 'reactstrap';

import {Data} from './Data'
import { connect } from 'react-redux';
import { Control, Form, actions } from 'react-redux-form';
import { Switch, Route, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router";


import Studentform from './forms/Student';
import Studentfee from './forms/Fee';
import Fb_student_feedback from './forms/fb_student_feedback';
import Hs_assigned_student_room from './forms/hs_assigned_student_room'
import Hs_student_allotment_list from './forms/hs_student_allotment_list'
import Reg_regular_form from './forms/reg_regular_form'

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

  return(
    <div class="container">
    <div class="row">
    <nav class="navbar navbar-dark navbar-expand-sm bg-primary fixed-top" >
        <div class="container">

                <ul class="navbar-nav mr-auto">

                <li class="nav-item" ><NavLink className="nav-link"  to='/Studentform'>student_detail</NavLink></li>
                <li class="nav-item" ><NavLink className="nav-link"  to='/Studentfee'>fee_detail</NavLink></li>
                <li class="nav-item" ><NavLink className="nav-link"  to='/Fb_student_feedback'>student_feedback</NavLink></li>
                <li class="nav-item" ><NavLink className="nav-link"  to='/hs_assigned_student_room'>hs_assigned_student_room</NavLink></li>
                <li class="nav-item" ><NavLink className="nav-link"  to='/hs_student_allotment_list'>hs_student_allotment_list</NavLink></li>
                 <li class="nav-item" ><NavLink className="nav-link"  to='/reg_regular_form'>regular_form</NavLink></li>


                </ul>
        </div>
    </nav>
    </div>
    <div class="spacer"></div>
       <Switch>

             <Route exact path='/Studentform' component={()=> <Studentform  />} />
             <Route exact path='/Studentfee' component={() => <Studentfee />} />
             <Route exact path='/Fb_student_feedback' component={() => <Fb_student_feedback />} />
             <Route exact path='/hs_assigned_student_room' component={() => <Hs_assigned_student_room />} />
             <Route exact path='/hs_student_allotment_list' component={() => <Hs_student_allotment_list />} />
             <Route exact path='/reg_regular_form' component={() => <Reg_regular_form />} />
             <Redirect to="/Studentform" />
         </Switch>


    </div>






  );

}

}




export default withRouter(connect(null)(Input));

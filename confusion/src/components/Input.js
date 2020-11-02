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
import Studentacad from './forms/stu_academic'
import StudentAdmFee from './forms/stu_adm_fee'
import StudentInfo from './forms/stu_info'
import StudentEnrollPassout from './forms/stu_enroll_passout'
import StuOtherInfo from './forms/stu_other_info'
import StuPrepData from './forms/stu_prep_data'

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
                <li class="nav-item" ><NavLink className="nav-link"  to='/stu_academic'>stu_academic</NavLink></li>
                <li class="nav-item" ><NavLink className="nav-link"  to='/stu_adm_fee'>stu_adm_fee</NavLink></li>
                <li class="nav-item" ><NavLink className="nav-link"  to='/stu_info'>stu_info</NavLink></li>
                <li class="nav-item" ><NavLink className="nav-link"  to='/stu_enroll_passout'>stu_enroll_passout</NavLink></li>
                <li class="nav-item" ><NavLink className="nav-link"  to='/stu_other_info'>stu_other_info</NavLink></li>
                <li class="nav-item" ><NavLink className="nav-link"  to='/stu_prep_data'>stu_prep_data</NavLink></li>
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
             <Route exact path='/stu_academic' component={() => <Studentacad />} />
             <Route exact path='/stu_adm_fee' component={() => <StudentAdmFee />} />
             <Route exact path='/stu_info' component={() => <StudentInfo />} />
             <Route exact path='/stu_enroll_passout' component={() => <StudentEnrollPassout />} />
             <Route exact path='/stu_other_info' component={() => <StuOtherInfo />} />
             <Route exact path='/stu_prep_data' component={() => <StuPrepData />} />
             <Redirect to="/Studentform" />
         </Switch>

    </div>
  );

}

}




export default withRouter(connect(null)(Input));

import React,{Component} from 'react';

import {Data} from './Data'
import { connect } from 'react-redux';
import { Switch, Route, Redirect } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import { withRouter } from "react-router";

import Studentform from './forms/Student';
import Studentfee from './forms/Fee';

import UserDetails from './forms/UserDetails';
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
        <div class="content container"   >
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
               <Route exact path='/user_details' component={()=> <UserDetails/>}/>
               <Redirect to="/Studentform" />
          </Switch>
        </div>
      </div>
    );
  }
}
export default withRouter(connect(null)(Input));

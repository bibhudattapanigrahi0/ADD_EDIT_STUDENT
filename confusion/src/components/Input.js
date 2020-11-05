import React, { Component } from "react";
import { Data } from "./Data";
import { connect } from "react-redux";
import { Switch, Route, Redirect } from "react-router-dom";
import { withRouter } from "react-router";

import Studentform from "./forms/Student";
import Studentfee from "./forms/Fee";

import UserDetails from "./forms/UserDetails";
import FbStudentFeedback from "./forms/fb_student_feedback";
import HsAssignedStudentRoom from "./forms/hs_assigned_student_room";
import HsStudentAllotmentList from "./forms/hs_student_allotment_list";
import RegRegularForm from "./forms/reg_regular_form";
import Studentacad from "./forms/stu_academic";
import StudentAdmFee from "./forms/stu_adm_fee";

class Input extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: Data,
      current: Data[0],
    };
  }
  switch(val) {
    this.setState({ current: val });
  }
  render() {
    return (
      <div class="container">
        <div class="content container">
          <Switch>
            <Route
              exact
              path="/Studentform"
              component={() => <Studentform />}
            />
            <Route exact path="/Studentfee" component={() => <Studentfee />} />
            <Route
              exact
              path="/Fb_student_feedback"
              component={() => <FbStudentFeedback />}
            />
            <Route
              exact
              path="/hs_assigned_student_room"
              component={() => <HsAssignedStudentRoom />}
            />
            <Route
              exact
              path="/hs_student_allotment_list"
              component={() => <HsStudentAllotmentList />}
            />
            <Route
              exact
              path="/reg_regular_form"
              component={() => <RegRegularForm />}
            />
            <Route
              exact
              path="/stu_academic"
              component={() => <Studentacad />}
            />
            <Route
              exact
              path="/stu_adm_fee"
              component={() => <StudentAdmFee />}
            />
            <Route
              exact
              path="/user_details"
              component={() => <UserDetails />}
            />
            <Redirect to="/Studentform" />
          </Switch>
        </div>
      </div>
    );
  }
}
export default withRouter(connect(null)(Input));


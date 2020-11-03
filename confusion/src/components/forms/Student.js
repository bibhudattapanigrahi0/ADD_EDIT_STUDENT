import React,{Component} from 'react';

import {   Button, Row, Col, Label } from 'reactstrap';

import { connect } from 'react-redux';
import { Control, Form, actions } from 'react-redux-form';
import axios from 'axios';


class Studentform extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <Form model="global_form" 
            onSubmit={(global_form) => {
                      axios.post(` http://localhost:8000`,global_form.student)
                      .then(res => {
                        console.log(res);
                        console.log(res.data);
                      })
                      console.log(global_form.student);

                      //alert("form submitted");
                      this.props.dispatch(actions.reset("global_form.student"));
      }}>
      <Row className="form-group">
          <Label htmlFor=".student.admn_no" md={2}>admission_no</Label>
          <Col md={10}>
              <Control.text model=".student.admn_no" id="admn_no" name="admn_no"
                  placeholder="admission_no"
                  className="form-control"
                   />
          </Col>
      </Row>
      <Row className="form-group">
          <Label htmlFor=".student.course_id" md={2}>course_id</Label>
          <Col md={10}>
              <Control.text model=".student.course_id" id="course_id" name="course_id"
                  placeholder="course_id"
                  className="form-control"
                   />
          </Col>
      </Row>
      <Row className="form-group">
          <Label htmlFor=".student.branch_id" md={2}>branch_id</Label>
          <Col md={10}>
              <Control.text model=".student.branch_id" id="branch_id" name="brnch_id"
                  placeholder="branch_id"
                  className="form-control"
                   />
          </Col>
      </Row>

      <Row className="form-group">
         <Col md={{size:3, offset: 2}}>
             <Button type="submit" color="primary" md={4}>
             submit
             </Button>
             </Col>
        <Col md={{size:3, offset: 0}}>
             <Control.reset model=".student"  md={4}>
           Clear Values
         </Control.reset>
         </Col>
     </Row>
  </Form>
  );
  }

}

export default connect(null)(Studentform);

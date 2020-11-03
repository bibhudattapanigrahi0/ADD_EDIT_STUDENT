import React,{Component} from 'react';

import {   Button, Row, Col, Label } from 'reactstrap';

import { connect } from 'react-redux';
import { Control, Form, actions } from 'react-redux-form';
import axios from 'axios';



class StuPrepData extends Component{
  constructor(props){
    super(props);

  }

render(){
return(
  <Form model="global_form" onSubmit={(global_form) => {
    axios.post(` http://localhost:8000`,global_form.stu_prep_data)
                      .then(res => {
                        console.log(res);
                        console.log(res.data);
                      })
                      console.log(global_form.stu_prep_data);

                      //alert("form submitted");
                      this.props.dispatch(actions.reset("global_form.stu_prep_data"));


  }}>
  <Row className="form-group">
                                  <Label htmlFor=".stu_prep_data.admn_no" md={2}>admission_no</Label>
                                  <Col md={10}>
                                      <Control.text model=".stu_prep_data.admn_no" id="admn_no" name="admn_no"
                                          placeholder="admission_no"
                                          className="form-control"
                                           />
                                  </Col>
                              </Row>
                              <Row className="form-group">
                                  <Label htmlFor=".stu_prep_data.session_year" md={2}>session_year</Label>
                                  <Col md={10}>
                                      <Control.text model=".stu_prep_data.session_year" id="session_year" name="session_year"
                                          placeholder="session_year"
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
                                     <Control.reset model=".stu_prep_data"  md={4}>
                                   Clear Values
                                 </Control.reset>

                                 </Col>



                             </Row>

  </Form>
);

}






}



export default connect(null)(StuPrepData);

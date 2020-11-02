import React,{Component} from 'react';

import {   Button, Row, Col, Label } from 'reactstrap';

import { connect } from 'react-redux';
import { Control, Form, actions } from 'react-redux-form';
import axios from 'axios';



class Studentacad extends Component{
  constructor(props){
    super(props);

  }

render(){
return(
  <Form model="global_form" onSubmit={(global_form) => {
    axios.post(` http://localhost:8000`,global_form.stu_acad)
                      .then(res => {
                        console.log(res);
                        console.log(res.data);
                      })
                      console.log(global_form.stu_acad);

                      //alert("form submitted");
                      this.props.dispatch(actions.reset("global_form.stu_acad"));


  }}>
  <Row className="form-group">
                                  <Label htmlFor=".stu_acad.admn_no" md={2}>admission_no</Label>
                                  <Col md={10}>
                                      <Control.text model=".stu_acad.admn_no" id="admn_no" name="admn_no"
                                          placeholder="admission_no"
                                          className="form-control"
                                           />
                                  </Col>
                              </Row>
                              <Row className="form-group">
                                  <Label htmlFor=".stu_acad.auth_id" md={2}>auth_id</Label>
                                  <Col md={10}>
                                      <Control.text model=".stu_acad.auth_id" id="auth_id" name="auth_id"
                                          placeholder="auth_id"
                                          className="form-control"
                                           />
                                  </Col>
                              </Row>
                              <Row className="form-group">
                                  <Label htmlFor=".stu_acad.enroll_year" md={2}>enroll_year</Label>
                                  <Col md={10}>
                                      <Control.text model=".stu_acad.enroll_year" id="enroll_year" name="enroll_year"
                                          placeholder="enroll_year"
                                          className="form-control"
                                           />
                                  </Col>
                              </Row>
                              <Row className="form-group">
                                  <Label htmlFor=".stu_acad.adm_based_on" md={2}>adm_based_on</Label>
                                  <Col md={10}>
                                      <Control.text model=".stu_acad.adm_based_on" id="adm_based_on" name="adm_based_on"
                                          placeholder="adm_based_on"
                                          className="form-control"
                                           />
                                  </Col>
                              </Row>
                              <Row className="form-group">
                                  <Label htmlFor=".stu_acad.iit_jee_rank" md={2}>iit_jee_rank</Label>
                                  <Col md={10}>
                                      <Control.text model=".stu_acad.iit_jee_rank" id="iit_jee_rank" name="iit_jee_rank"
                                          placeholder="iit_jee_rank"
                                          className="form-control"
                                           />
                                  </Col>
                              </Row>
                              <Row className="form-group">
                                  <Label htmlFor=".stu_acad.iit_jee_cat_rank" md={2}>iit_jee_cat_rank</Label>
                                  <Col md={10}>
                                      <Control.text model=".stu_acad.iit_jee_cat_rank" id="iit_jee_cat_rank" name="iit_jee_cat_rank"
                                          placeholder="iit_jee_cat_rank"
                                          className="form-control"
                                           />
                                  </Col>
                              </Row>
                              <Row className="form-group">
                                  <Label htmlFor=".stu_acad.cat_score" md={2}>cat_score</Label>
                                  <Col md={10}>
                                      <Control.text model=".stu_acad.cat_score" id="cat_score" name="cat_score"
                                          placeholder="cat_score"
                                          className="form-control"
                                           />
                                  </Col>
                              </Row>
                              <Row className="form-group">
                                  <Label htmlFor=".stu_acad.gate_score" md={2}>gate_score</Label>
                                  <Col md={10}>
                                      <Control.text model=".stu_acad.gate_score" id="gate_score" name="gate_score"
                                          placeholder="gate_score"
                                          className="form-control"
                                           />
                                  </Col>
                              </Row>
                              <Row className="form-group">
                                  <Label htmlFor=".stu_acad.course_id" md={2}>course_id</Label>
                                  <Col md={10}>
                                      <Control.text model=".stu_acad.course_id" id="course_id" name="course_id"
                                          placeholder="course_id"
                                          className="form-control"
                                           />
                                  </Col>
                              </Row>
                              <Row className="form-group">
                                  <Label htmlFor=".stu_acad.branch_id" md={2}>branch_id</Label>
                                  <Col md={10}>
                                      <Control.text model=".stu_acad.branch_id" id="branch_id" name="brnch_id"
                                          placeholder="branch_id"
                                          className="form-control"
                                           />
                                  </Col>
                              </Row>
                              <Row className="form-group">

                                <Label htmlFor=".stu_acad.semester" md={2}>semester</Label>
                                <Col md={10}>
                                    <Control.select model=".stu_acad.semester" id="semester" name="semester"

                                        className="form-control"
                                         >
                                         <option value="1">1</option>
                                          <option value="2">2</option>
                                          <option value="3">3</option>
                                          <option value="4">4</option>
                                          <option value="5">5</option>
                                          <option value="6">6</option>
                                          <option value="7">7</option>
                                          <option value="8">8</option>
                                          <option value="9">9</option>
                                          <option value="10">10</option>
                                        </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">
                                  <Label htmlFor=".stu_acad.other_rank" md={2}>other_rank</Label>
                                  <Col md={10}>
                                      <Control.text model=".stu_acad.other_rank" id="other_rank" name="other_rank"
                                          placeholder="other_rank"
                                          className="form-control"
                                           />
                                  </Col>
                              </Row>
                              <Row className="form-group">

                                <Label htmlFor=".stu_acad.grading_type" md={2}>grading_type</Label>
                                <Col md={10}>
                                    <Control.select model=".stu_acad.grading_type" id="grading_type" name="grading_type"

                                        className="form-control"
                                         >
                                         <option value="N">N</option>
                                          <option value="A">A</option>
                                          <option value="R">R</option>
                                        </Control.select>
                                </Col>
                            </Row>



                              <Row className="form-group">
                                 <Col md={{size:3, offset: 2}}>
                                     <Button type="submit" color="primary" md={4}>
                                     submit
                                     </Button>
                                     </Col>
                                <Col md={{size:3, offset: 0}}>
                                     <Control.reset model=".stu_acad"  md={4}>
                                   Clear Values
                                 </Control.reset>

                                 </Col>



                             </Row>

  </Form>
);

}






}



export default connect(null)(Studentacad);

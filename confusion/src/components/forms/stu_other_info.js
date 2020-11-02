import React,{Component} from 'react';

import {   Button, Row, Col, Label } from 'reactstrap';

import { connect } from 'react-redux';
import { Control, Form, actions } from 'react-redux-form';
import axios from 'axios';



class StuOtherInfo extends Component{
  constructor(props){
    super(props);

  }

render(){
return(
  <Form model="global_form" onSubmit={(global_form) => {
    axios.post(` http://localhost:8000`,global_form.stu_other_info)
                      .then(res => {
                        console.log(res);
                        console.log(res.data);
                      })
                      console.log(global_form.stu_other_info);

                      //alert("form submitted");
                      this.props.dispatch(actions.reset("global_form.stu_other_info"));


  }}>
  <Row className="form-group">
                                  <Label htmlFor=".stu_other_info.admn_no" md={2}>admission_no</Label>
                                  <Col md={10}>
                                      <Control.text model=".stu_other_info.admn_no" id="admn_no" name="admn_no"
                                          placeholder="admission_no"
                                          className="form-control"
                                           />
                                  </Col>
                              </Row>
                              <Row className="form-group">
                                  <Label htmlFor=".stu_other_info.fathers_occupation" md={2}>fathers_occupation</Label>
                                  <Col md={10}>
                                      <Control.text model=".stu_other_info.fathers_occupation" id="fathers_occupation" name="fathers_occupation"
                                          placeholder="fathers_occupation"
                                          className="form-control"
                                           />
                                  </Col>
                              </Row>
                              <Row className="form-group">
                                  <Label htmlFor=".stu_other_info.mothers_occupation" md={2}>mothers_occupation</Label>
                                  <Col md={10}>
                                      <Control.text model=".stu_other_info.mothers_occupation" id="mothers_occupation" name="mothers_occupation"
                                          placeholder="mothers_occupation"
                                          className="form-control"
                                           />
                                  </Col>
                              </Row>
                              <Row className="form-group">
                                  <Label htmlFor=".stu_other_info.fathers_annual_income" md={2}>fathers_annual_income</Label>
                                  <Col md={10}>
                                      <Control.text model=".stu_other_info.fathers_annual_income" id="fathers_annual_income" name="fathers_annual_income"
                                          placeholder="fathers_annual_income"
                                          className="form-control"
                                           />
                                  </Col>
                              </Row>
                              <Row className="form-group">
                                  <Label htmlFor=".stu_other_info.mothers_annual_income" md={2}>mothers_annual_income</Label>
                                  <Col md={10}>
                                      <Control.text model=".stu_other_info.mothers_annual_income" id="mothers_annual_income" name="mothers_annual_income"
                                          placeholder="mothers_annual_income"
                                          className="form-control"
                                           />
                                  </Col>
                              </Row>
                              <Row className="form-group">
                                  <Label htmlFor=".stu_other_info.guardian_name" md={2}>guardian_name</Label>
                                  <Col md={10}>
                                      <Control.text model=".stu_other_info.guardian_name" id="guardian_name" name="guardian_name"
                                          placeholder="guardian_name"
                                          className="form-control"
                                           />
                                  </Col>
                              </Row>
                              <Row className="form-group">
                                  <Label htmlFor=".stu_other_info.guardian_relation" md={2}>guardian_relation</Label>
                                  <Col md={10}>
                                      <Control.text model=".stu_other_info.guardian_relation" id="guardian_relation" name="guardian_relation"
                                          placeholder="guardian_relation"
                                          className="form-control"
                                           />
                                  </Col>
                              </Row>
                              <Row className="form-group">
                                  <Label htmlFor=".stu_other_info.bank_name" md={2}>bank_name</Label>
                                  <Col md={10}>
                                      <Control.text model=".stu_other_info.bank_name" id="bank_name" name="bank_name"
                                          placeholder="bank_name"
                                          className="form-control"
                                           />
                                  </Col>
                              </Row>
                              <Row className="form-group">
                                  <Label htmlFor=".stu_other_info.account_no" md={2}>account_no</Label>
                                  <Col md={10}>
                                      <Control.text model=".stu_other_info.account_no" id="account_no" name="account_no"
                                          placeholder="account_no"
                                          className="form-control"
                                           />
                                  </Col>
                              </Row>
                              <Row className="form-group">
                                  <Label htmlFor=".stu_other_info.aadhaar_card_no" md={2}>aadhaar_card_no</Label>
                                  <Col md={10}>
                                      <Control.text model=".stu_other_info.aadhaar_card_no" id="aadhaar_card_no" name="brnch_id"
                                          placeholder="aadhaar_card_no"
                                          className="form-control"
                                           />
                                  </Col>
                              </Row>
                   
                            <Row className="form-group">
                                  <Label htmlFor=".stu_other_info.extra_curr_act" md={2}>extra_curr_act</Label>
                                  <Col md={10}>
                                      <Control.text model=".stu_other_info.extra_curr_act" id="extra_curr_act" name="extra_curr_act"
                                          placeholder="extra_curr_act"
                                          className="form-control"
                                           />
                                  </Col>
                              </Row>
                              <Row className="form-group">
                                  <Label htmlFor=".stu_other_info.other_relevent_info" md={2}>other_relevent_info</Label>
                                  <Col md={10}>
                                      <Control.text model=".stu_other_info.other_relevent_info" id="other_relevent_info" name="other_relevent_info"
                                          placeholder="other_relevent_info"
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
                                     <Control.reset model=".stu_other_info"  md={4}>
                                   Clear Values
                                 </Control.reset>

                                 </Col>



                             </Row>

  </Form>
);

}






}



export default connect(null)(StuOtherInfo);

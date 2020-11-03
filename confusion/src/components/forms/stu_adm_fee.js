import React,{Component} from 'react';

import {   Button, Row, Col, Label } from 'reactstrap';

import { connect } from 'react-redux';
import { Control, Form, actions } from 'react-redux-form';
import axios from 'axios';



class StudentAdmFee extends Component{
  constructor(props){
    super(props);

  }

render(){
return(
  <Form model="global_form" onSubmit={(global_form) => {
    axios.post(` http://localhost:8000`,global_form.stu_adm_fee)
                      .then(res => {
                        console.log(res);
                        console.log(res.data);
                      })
                      console.log(global_form.stu_adm_fee);

                      //alert("form submitted");
                      this.props.dispatch(actions.reset("global_form.stu_adm_fee"));


  }}>
  <Row className="form-group">
                                  <Label htmlFor=".stu_adm_fee.admn_no" md={2}>admission_no</Label>
                                  <Col md={10}>
                                      <Control.text model=".stu_adm_fee.admn_no" id="admn_no" name="admn_no"
                                          placeholder="admission_no"
                                          className="form-control"
                                           />
                                  </Col>
                              </Row>
                              <Row className="form-group">
                                  <Label htmlFor=".stu_adm_fee.fee_mode" md={2}>fee_mode</Label>
                                  <Col md={10}>
                                      <Control.text model=".stu_adm_fee.fee_mode" id="fee_mode" name="fee_mode"
                                          placeholder="fee_mode"
                                          className="form-control"
                                           />
                                  </Col>
                              </Row>
                              <Row className="form-group">
                                  <Label htmlFor=".stu_adm_fee.fee_amount" md={2}>fee_amount</Label>
                                  <Col md={10}>
                                      <Control.text model=".stu_adm_fee.fee_amount" id="fee_amount" name="fee_amount"
                                          placeholder="fee_amount"
                                          className="form-control"
                                           />
                                  </Col>
                              </Row>
                              <Row className="form-group">
                                  <Label htmlFor=".stu_adm_fee.fee_in_favour" md={2}>fee_in_favour</Label>
                                  <Col md={10}>
                                      <Control.text model=".stu_adm_fee.fee_in_favour" id="fee_in_favour" name="fee_in_favour"
                                          placeholder="fee_in_favour"
                                          className="form-control"
                                           />
                                  </Col>
                              </Row>
                              <Row className="form-group">
                                  <Label htmlFor=".stu_adm_fee.payment_made_on" md={2}>payment_made_on</Label>
                                  <Col md={10}>
                                      <Control.text model=".stu_adm_fee.payment_made_on" id="payment_made_on" name="payment_made_on"
                                          placeholder="payment_made_on"
                                          className="form-control"
                                           />
                                  </Col>
                              </Row>
                              <Row className="form-group">
                                  <Label htmlFor=".stu_adm_fee.transaction_id" md={2}>transaction_id</Label>
                                  <Col md={10}>
                                      <Control.text model=".stu_adm_fee.transaction_id" id="transaction_id" name="transaction_id"
                                          placeholder="transaction_id"
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
                                     <Control.reset model=".stu_adm_fee"  md={4}>
                                   Clear Values
                                 </Control.reset>

                                 </Col>



                             </Row>

  </Form>
);

}






}



export default connect(null)(StudentAdmFee);

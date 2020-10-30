import React,{Component} from 'react';

import {   Button, Row, Col, Label } from 'reactstrap';

import { connect } from 'react-redux';
import { Control, Form, actions } from 'react-redux-form';

import axios from 'axios';



class Reg_regular_form extends Component{
  constructor(props){
    super(props);

  }

render(){
return(
  <Form model="global_form" onSubmit={(global_form) => {
    axios.post(` http://localhost:8000`,global_form.fee)
                      .then(res => {
                        console.log(res);
                        console.log(res.data);
                      })
                      console.log(global_form.fee);

                      //alert("form submitted");
                      this.props.dispatch(actions.reset("global_form.fee"));


  }}>
                            <Row className="form-group">



                                                              <Label htmlFor=".reg_regular_form.form_id" md={2}>form_id</Label>
                                                              <Col md={10}>
                                                                  <Control.text model=".reg_regular_form.form_id" id="form_id" name="form_id"

                                                                      className="form-control"
                                                                       />
                                                              </Col>
                                                          </Row>
                  <Row className="form-group">



                                                    <Label htmlFor=".reg_regular_form.admn_no" md={2}>admn_no</Label>
                                                    <Col md={10}>
                                                        <Control.text model=".reg_regular_form.admn_no" id="admn_no" name="admn_no"

                                                            className="form-control"
                                                             />
                                                    </Col>
                                                </Row>
<Row className="form-group">



                                  <Label htmlFor=".reg_regular_form.fee_amt" md={2}>fee_amount</Label>
                                  <Col md={10}>
                                      <Control.text model=".reg_regular_form.fee_amt" id="fee_amt" name="fee_amt"

                                          className="form-control"
                                           />
                                  </Col>
                              </Row>
                              <Row className="form-group">



                                                                <Label htmlFor=".reg_regular_form.fee_date" md={2}>fee_date</Label>
                                                                <Col md={10}>
                                                                    <Control.text model=".reg_regular_form.fee_date" id="fee_date" name="fee_date"

                                                                        className="form-control"
                                                                         />
                                                                </Col>
                                                            </Row>
              <Row className="form-group">



                                                <Label htmlFor=".reg_regular_form.transaction_id" md={2}>transaction_id</Label>
                                                <Col md={10}>
                                                    <Control.text model=".reg_regular_form.transaction_id" id="transaction_id" name="transaction_id"

                                                        className="form-control"
                                                         />
                                                </Col>
                                            </Row>
              <Row className="form-group">



                                                <Label htmlFor=".reg_regular_form.receipt_path" md={2}>receipt_path</Label>
                                                <Col md={10}>
                                                    <Control.text model=".reg_regular_form.receipt_path" id="receipt_path" name="receipt_path"

                                                        className="form-control"
                                                         />
                                                </Col>
                                            </Row>
                <Row className="form-group">



                                                  <Label htmlFor=".reg_regular_form.late_receipt_path" md={2}>late_receipt_path</Label>
                                                  <Col md={10}>
                                                      <Control.text model=".reg_regular_form.late_receipt_path" id="late_receipt_path" name="late_receipt_path"

                                                          className="form-control"
                                                           />
                                                  </Col>
                                              </Row>
                <Row className="form-group">



                                                  <Label htmlFor=".reg_regular_form.late_receipt_date" md={2}>late_receipt_date</Label>
                                                  <Col md={10}>
                                                      <Control.text model=".reg_regular_form.late_receipt_date" id="late_receipt_date" name="late_receipt_date"

                                                          className="form-control"
                                                           />
                                                  </Col>
                                              </Row>
                          <Row className="form-group">



                                                            <Label htmlFor=".reg_regular_form.late_transaction_id" md={2}>late_transaction_id</Label>
                                                            <Col md={10}>
                                                                <Control.text model=".reg_regular_form.late_transaction_id" id="late_transaction_id" name="late_transaction_id"

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
                                     <Control.reset model=".reg_regular_form"  md={4}>
                                   Clear Values
                                 </Control.reset>

                                 </Col>



                             </Row>

  </Form>
);

}






}



export default connect(null)(Reg_regular_form);

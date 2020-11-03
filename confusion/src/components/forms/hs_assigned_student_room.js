import React,{Component} from 'react';

import {   Button, Row, Col, Label } from 'reactstrap';

import { connect } from 'react-redux';
import { Control, Form, actions } from 'react-redux-form';
import axios from 'axios';


class Hs_assigned_student_room extends Component{
  constructor(props){
    super(props);

  }

render(){
return(
  <Form model="global_form" onSubmit={(global_form) => {
    axios.post(` http://localhost:8000`,global_form.hs_assigned_student_room)
                      .then(res => {
                        console.log(res);
                        console.log(res.data);
                      })
                      console.log(global_form.hs_assigned_student_room);

                      //alert("form submitted");
                      this.props.dispatch(actions.reset("global_form.fee"));


  }}>
            <Row className="form-group">

                  <Label htmlFor=".hs_assigned_student_room.id" md={2}>id</Label>
                  <Col md={10}>
                      <Control.text model=".hs_assigned_student_room.id" id="id" name="id"

                          className="form-control"
                           />
                  </Col>
              </Row>
              <Row className="form-group">

                    <Label htmlFor=".hs_assigned_student_room.admn_no" md={2}>admission_no</Label>
                    <Col md={10}>
                        <Control.text model=".hs_assigned_student_room.admn_no" id="admn_no" name="admn_no"

                            className="form-control"
                             />
                    </Col>
                </Row>
                <Row className="form-group">

                      <Label htmlFor=".hs_assigned_student_room.room_detail_id" md={2}>room_detail_id</Label>
                      <Col md={10}>
                          <Control.text model=".hs_assigned_student_room.room_detail_id" id="room_detail_id" name="room_detail_id"

                              className="form-control"
                               />
                      </Col>
                  </Row>
                  <Row className="form-group">

                        <Label htmlFor=".hs_assigned_student_room.entry_datetime" md={2}>entry_datetime</Label>
                        <Col md={10}>
                            <Control.text model=".hs_assigned_student_room.entry_datetime" id="entry_datetime" name="entry_datetime"

                                className="form-control"
                                 />
                        </Col>
                    </Row>
                    <Row className="form-group">

                          <Label htmlFor=".hs_assigned_student_room.exit_datetime" md={2}>exit_datetime</Label>
                          <Col md={10}>
                              <Control.text model=".hs_assigned_student_room.exit_datetime" id="exit_datetime" name="exit_datetime"

                                  className="form-control"
                                   />
                          </Col>
                      </Row>
                      <Row className="form-group">

                            <Label htmlFor=".hs_assigned_student_room.created_by" md={2}>created_by</Label>
                            <Col md={10}>
                                <Control.text model=".hs_assigned_student_room.created_by" id="created_by" name="created_by"

                                    className="form-control"
                                     />
                            </Col>
                        </Row>
                        <Row className="form-group">

                              <Label htmlFor=".hs_assigned_student_room.created_date" md={2}>created_date</Label>
                              <Col md={10}>
                                  <Control.text model=".hs_assigned_student_room.created_date" id="created_date" name="created_date"

                                      className="form-control"
                                       />
                              </Col>
                          </Row>
                          <Row className="form-group">

                                <Label htmlFor=".hs_assigned_student_room.status" md={2}>status</Label>
                                <Col md={10}>
                                    <Control.select model=".hs_assigned_student_room.status" id="status" name="status"

                                        className="form-control"
                                         >
                                         <option value="In">in</option>
                                          <option value="Out">Out</option>
                                        </Control.select>
                                </Col>
                            </Row>
                            <Row className="form-group">

                                  <Label htmlFor=".hs_assigned_student_form.type" md={2}>type</Label>
                                  <Col md={10}>
                                      <Control.select model=".hs_assigned_student_form.type" id="type" name="type"

                                          className="form-control"
                                           >
                                           <option value="student">student</option>
                                            <option value="guest">guest</option>
                                          </Control.select>
                                  </Col>
                              </Row>

                              <Row className="form-group">

                                    <Label htmlFor=".hs_assigned_student_form.modify_by" md={2}>modify_by</Label>
                                    <Col md={10}>
                                        <Control.text model=".hs_assigned_student_form.modify_by" id="modify_by" name="modify_by"

                                            className="form-control"
                                             />
                                    </Col>
                                </Row>
                                <Row className="form-group">

                                      <Label htmlFor=".hs_assigned_student_form.modify_date" md={2}>modify_date</Label>
                                      <Col md={10}>
                                          <Control.text model=".hs_assigned_student_form.modify_date" id="modify_date" name="modify_date"

                                              className="form-control"
                                               />
                                      </Col>
                                  </Row>
                                  <Row className="form-group">

                                        <Label htmlFor=".hs_assigned_student_form.is_deleted" md={2}>isdeleted</Label>
                                        <Col md={10}>
                                            <Control.select model=".hs_assigned_student_form.is_deleted" id="is_deleted" name="is_deleted"

                                                className="form-control"
                                                 >
                                                 <option value="0">no</option>
                                                 <option value="1">yes</option>

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
                                     <Control.reset model=".hs_assigned_student_room"  md={4}>
                                   Clear Values
                                 </Control.reset>

                                 </Col>



                             </Row>

  </Form>
);

}






}



export default connect(null)(Hs_assigned_student_room);

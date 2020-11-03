import React,{Component} from 'react';

import {   Button, Row, Col, Label } from 'reactstrap';

import { connect } from 'react-redux';
import { Control, Form, actions } from 'react-redux-form';

import axios from 'axios';



class Hs_student_allotment_list extends Component{
  constructor(props){
    super(props);

  }

render(){
return(
  <Form model="global_form" onSubmit={(global_form) => {
    axios.post(` http://localhost:8000`,global_form.hs_student_allotment_list)
                      .then(res => {
                        console.log(res);
                        console.log(res.data);
                      })
                      console.log(global_form.hs_student_allotment_list);

                      //alert("form submitted");
                      this.props.dispatch(actions.reset("global_form.hs_student_allotment_list"));


  }}>
  <Row className="form-group">

        <Label htmlFor=".hs_student_allotment_list.id" md={2}>id</Label>
        <Col md={10}>
            <Control.text model=".hs_student_allotment_list.id" id="id" name="id"

                className="form-control"
                 />
        </Col>
    </Row>
    <Row className="form-group">

          <Label htmlFor=".hs_student_allotment_list.admn_no" md={2}>admission_no</Label>
          <Col md={10}>
              <Control.text model=".hs_student_allotment_list.admn_no" id="admn_no" name="admn_no"

                  className="form-control"
                   />
          </Col>
      </Row>
      <Row className="form-group">

            <Label htmlFor=".hs_student_allotment_list.hostel_name" md={2}>hostel_name</Label>
            <Col md={10}>
                <Control.text model=".hs_student_allotment_list.hostel_name" id="hostel_name" name="hostel_name"

                    className="form-control"
                     />
            </Col>
        </Row>
      <Row className="form-group">

            <Label htmlFor=".hs_student_allotment_list.hostel_detail_id" md={2}>hostel_detail_id</Label>
            <Col md={10}>
                <Control.text model=".hs_student_allotment_list.hostel_detail_id" id="hostel_detail_id" name="hostel_detail_id"

                    className="form-control"
                     />
            </Col>
        </Row>

        <Row className="form-group">

              <Label htmlFor=".hs_student_allotment_list.status" md={2}>status</Label>
              <Col md={10}>
                  <Control.select model=".hs_student_allotment_list.status" id="status" name="status"

                      className="form-control"
                       >
                       <option value="available">available</option>
                        <option value="unavailable">unavailable</option>
                      </Control.select>
              </Col>
              </Row>
              <Row className="form-group">

                    <Label htmlFor=".hs_student_allotment_list.modify_date" md={2}>modify_date</Label>
                    <Col md={10}>
                        <Control.text model=".hs_student_allotment_list.modify_date" id="modify_date" name="modify_date"

                            className="form-control"
                             />
                    </Col>
                </Row>
                <Row className="form-group">

                      <Label htmlFor=".hs_student_allotment_list.is_deleted" md={2}>isdeleted</Label>
                      <Col md={10}>
                          <Control.select model=".hs_student_allotment_list.is_deleted" id="is_deleted" name="is_deleted"

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
                                     <Control.reset model=".hs_student_allotment_list"  md={4}>
                                   Clear Values
                                 </Control.reset>

                                 </Col>



                             </Row>

  </Form>
);

}






}



export default connect(null)(Hs_student_allotment_list);
